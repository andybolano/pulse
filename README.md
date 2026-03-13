# PULSE — Alarmas para tu bienestar

Aplicación de bienestar desarrollada como entrega académica. Permite gestionar alarmas de bienestar, visualizar planeación semanal e historial de cumplimiento.

---

## Stack tecnológico

| Tecnología | Uso |
|---|---|
| React 18 + Vite | Framework frontend |
| React Router DOM v6 | Navegación entre pantallas |
| Tailwind CSS v4 | Estilos responsive (mobile-first) |
| Recharts | Gráfica de barras en Historial |
| Lucide React | Íconos |
| Capacitor + Android | Generación del APK |

---

## Pantallas implementadas

| Ruta | Pantalla |
|---|---|
| `/login` | Login con email/contraseña y Google |
| `/conectar-calendario` | Selección de calendario (Google, Apple, Outlook) |
| `/inicio` | Dashboard con resumen del día y racha |
| `/planeacion` | Grilla semanal + sugerencias PULSE |
| `/alarmas` | Listado con buscador y filtro por categoría |
| `/alarmas/nueva` | Formulario de nueva alarma + vista previa |
| `/historial` | Stats de cumplimiento + gráfica de barras |

---

## Pregunta 1 — Frontend Web

**Repositorio:** <!-- INSERTAR URL DEL REPOSITORIO AQUÍ -->

### Cómo ejecutar la app web

**Requisitos:** Node.js 18+

```bash
# 1. Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>
cd pulse

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
npm run dev
```

La app queda disponible en: **http://localhost:5173**

> El flujo de navegación inicia siempre en `/login`. Desde ahí se puede navegar a todas las pantallas usando el menú de navegación.

### Build de producción

```bash
npm run build
# Los archivos quedan en /dist
```

---

## Pregunta 2 — Frontend Mobile

**Repositorio:** <!-- INSERTAR URL DEL REPOSITORIO AQUÍ -->

> El repositorio es el mismo que el de la app web. El proyecto usa **un único codebase** (React + Capacitor) que genera tanto la app web como el APK Android.

### Pantallas responsive (mobile)

Todas las pantallas están adaptadas para mobile con:
- Header con wave azul gradiente (`#2F5BFF → #6A5CFF`)
- Menú de navegación en el footer (fondo `#1E3AAE`)
- Layouts apilados verticalmente optimizados para pantallas pequeñas

### Cómo ejecutar en modo mobile (navegador)

```bash
npm run dev
```

Abrir en el navegador y usar las **DevTools → Toggle device toolbar** (responsive mode) para simular un dispositivo móvil.

---

## Pregunta 3 — APK Android

**Enlace de descarga (Google Drive):** https://drive.google.com/file/d/1U3CubZvaClWh8FPsSirqNGgytVphp5yx/view?usp=drive_link

### Especificaciones del APK

| Campo | Valor |
|---|---|
| Archivo | `app-debug.apk` |
| Tamaño | ~5.6 MB |
| API mínima | Android 7.0 (API 24) |
| Plataforma | Android (arm64 + x86) |

### Cómo instalar el APK

1. Descargar el archivo `app-debug.apk` desde el enlace de Drive
2. En el dispositivo Android ir a **Ajustes → Seguridad → Instalar apps desconocidas** y habilitarlo para el explorador de archivos
3. Abrir el archivo descargado e instalar
4. Abrir la app **PULSE**

> El APK es una build de debug firmada con la clave de desarrollo local, lo que puede generar una advertencia de seguridad al instalar — esto es normal para entregas académicas.

### Cómo regenerar el APK (desde el repositorio)

**Requisitos:** Java 21, Android SDK

```bash
# 1. Instalar dependencias
npm install

# 2. Build web
npm run build

# 3. Sincronizar con Android
npx cap sync android

# 4. Compilar APK (ajustar JAVA_HOME según tu instalación)
cd android
JAVA_HOME=/opt/homebrew/Cellar/openjdk@21/21.0.6/libexec/openjdk.jdk/Contents/Home \
  ./gradlew assembleDebug

# El APK queda en:
# android/app/build/outputs/apk/debug/app-debug.apk
```

---

## Interactividad de componentes

| Componente | Estado |
|---|---|
| Formulario de login | Activo — navega al flujo principal |
| Selector de calendario | Activo — seleccionable, dispara loading |
| Buscador de alarmas | Activo — filtra la lista en tiempo real |
| Dropdown de categoría | Activo — filtra la lista en tiempo real |
| Toggle 7 días / 4 semanas (Historial) | Activo — cambia los datos del gráfico |
| Botón `+` sugerencias (Planeación) | Activo |
| Formulario nueva alarma | Activo — actualiza vista previa en tiempo real |
| Menú de navegación | Activo — navega entre todas las pantallas |
