import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import legacy from '@vitejs/plugin-legacy'
import { transformSync } from '@babel/core'
import babelPresetEnv from '@babel/preset-env'
import { transform as lightningTransform } from 'lightningcss'

// Unwrap @layer blocks and remove @property for old WebView compatibility
function unwrapLayers(css) {
  // Remove standalone layer declarations like: @layer components;
  let result = css.replace(/@layer\s+[\w,\s]+;/g, '')

  // Parse and unwrap @layer blocks using brace-counting
  function unwrapAtRule(str, atRule) {
    let out = ''
    let i = 0
    while (i < str.length) {
      const idx = str.indexOf(atRule, i)
      if (idx === -1) { out += str.slice(i); break }
      out += str.slice(i, idx)
      // Find the opening brace
      const open = str.indexOf('{', idx)
      if (open === -1) { out += str.slice(idx); break }
      // Count braces to find the matching close
      let depth = 1, j = open + 1
      while (j < str.length && depth > 0) {
        if (str[j] === '{') depth++
        else if (str[j] === '}') depth--
        j++
      }
      // Extract content between braces and append it (without @layer wrapper)
      out += str.slice(open + 1, j - 1)
      i = j
    }
    return out
  }

  result = unwrapAtRule(result, '@layer ')

  // Convert CSS logical properties to physical ones (for Chrome < 69)
  result = result
    .replace(/padding-inline\s*:\s*([^;{}]+)/g, 'padding-left:$1;padding-right:$1')
    .replace(/padding-block\s*:\s*([^;{}]+)/g, 'padding-top:$1;padding-bottom:$1')
    .replace(/margin-inline\s*:\s*([^;{}]+)/g, 'margin-left:$1;margin-right:$1')
    .replace(/margin-block\s*:\s*([^;{}]+)/g, 'margin-top:$1;margin-bottom:$1')

  // Fix gradient color interpolation: "to right in oklab" → "to right"
  // Chrome < 98 doesn't support color interpolation hints in gradients
  result = result.replace(/\s+in\s+oklab/g, '')

  // Add grid-gap fallback for Chrome < 66 (gap only works as grid-gap for grids)
  // and flex gap workaround (margin on siblings for chrome < 84)
  const spacing = 0.25 // rem, matches --spacing: .25rem
  const gapValues = [
    { cls: '0\\.5', n: 0.5 }, { cls: '1', n: 1 }, { cls: '1\\.5', n: 1.5 },
    { cls: '2', n: 2 }, { cls: '3', n: 3 }, { cls: '4', n: 4 },
    { cls: '5', n: 5 }, { cls: '6', n: 6 },
  ]
  let fallbackCss = ''
  for (const { cls, n } of gapValues) {
    const val = `${n * spacing}rem`
    // grid-gap for grid containers
    fallbackCss += `.gap-${cls}{grid-gap:${val};grid-row-gap:${val};grid-column-gap:${val};row-gap:${val};column-gap:${val}}`
    // margin fallback for flex-col containers
    fallbackCss += `.flex-col.gap-${cls}>*+*{margin-top:${val}}`
    // margin fallback for flex-row containers (exclude flex-col to avoid double margin)
    fallbackCss += `.flex:not(.flex-col).gap-${cls}>*+*{margin-left:${val}}`
  }
  result += fallbackCss

  return result
}

// Post-process CSS in the final bundle
const cssCompatPlugin = {
  name: 'css-compat',
  enforce: 'post',
  generateBundle(_opts, bundle) {
    for (const [, asset] of Object.entries(bundle)) {
      if (asset.type === 'asset' && asset.fileName.endsWith('.css')) {
        let css = asset.source.toString()
        // Apply Lightning CSS for oklch→rgb, logical props, etc.
        try {
          const result = lightningTransform({
            filename: asset.fileName,
            code: Buffer.from(css),
            targets: { chrome: 63 << 16 },
            minify: true,
          })
          css = result.code.toString()
        } catch (_e) {
          // fallback: use original css
        }
        // Unwrap @layer (not handled by Lightning CSS automatically)
        css = unwrapLayers(css)
        asset.source = css
      }
    }
  },
}

// Apply Babel ES5 transform to legacy bundle so old Android WebViews can run it
const babelLegacyTransform = {
  name: 'babel-legacy-transform',
  enforce: 'post',
  generateBundle(_opts, bundle) {
    for (const [, chunk] of Object.entries(bundle)) {
      if (chunk.type === 'chunk' && chunk.fileName.includes('-legacy')) {
        const result = transformSync(chunk.code, {
          babelrc: false,
          configFile: false,
          targets: 'chrome 63',
          presets: [[babelPresetEnv, {
            bugfixes: false,
            modules: false,
            shippedProposals: true,
          }]],
          compact: true,
        })
        if (result?.code) {
          chunk.code = result.code
        }
      }
    }
  },
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    legacy({
      targets: ['chrome >= 49', 'android >= 4.4'],
      renderModernChunks: false,
    }),
    cssCompatPlugin,
    babelLegacyTransform,
  ],
})
