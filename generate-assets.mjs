import sharp from 'sharp';
import { mkdirSync } from 'fs';

mkdirSync('./assets-source', { recursive: true });

// ── Icon 1024x1024 ──
// Blue background (#1E3AAE) with white bold "P" centered
const iconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
  <rect width="1024" height="1024" rx="180" fill="#1E3AAE"/>
  <text
    x="512" y="700"
    font-family="Arial Black, Arial, sans-serif"
    font-size="680"
    font-weight="900"
    fill="white"
    text-anchor="middle"
  >P</text>
</svg>`;

await sharp(Buffer.from(iconSvg))
  .png()
  .toFile('./assets-source/icon.png');

console.log('✓ icon.png generado (1024x1024)');

// ── Splash 2732x2732 ──
// Blue gradient background with PULSE text and "P" icon centered
const splashSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="2732" height="2732" viewBox="0 0 2732 2732">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2F5BFF"/>
      <stop offset="100%" style="stop-color:#6A5CFF"/>
    </linearGradient>
  </defs>
  <rect width="2732" height="2732" fill="url(#bg)"/>
  <!-- Icon circle -->
  <circle cx="1366" cy="1200" r="320" fill="rgba(255,255,255,0.15)"/>
  <text
    x="1366" y="1380"
    font-family="Arial Black, Arial, sans-serif"
    font-size="420"
    font-weight="900"
    fill="white"
    text-anchor="middle"
  >P</text>
  <!-- App name -->
  <text
    x="1366" y="1720"
    font-family="Arial Black, Arial, sans-serif"
    font-size="200"
    font-weight="900"
    fill="white"
    text-anchor="middle"
    letter-spacing="40"
  >PULSE</text>
  <!-- Tagline -->
  <text
    x="1366" y="1880"
    font-family="Arial, sans-serif"
    font-size="90"
    font-weight="400"
    fill="rgba(255,255,255,0.7)"
    text-anchor="middle"
  >Alarmas para tu bienestar</text>
</svg>`;

await sharp(Buffer.from(splashSvg))
  .png()
  .toFile('./assets-source/splash.png');

console.log('✓ splash.png generado (2732x2732)');

// ── Splash dark (same for dark mode) ──
await sharp(Buffer.from(splashSvg))
  .png()
  .toFile('./assets-source/splash-dark.png');

console.log('✓ splash-dark.png generado');
console.log('\nListo. Ejecuta: npx capacitor-assets generate --android');
