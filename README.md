# TecLegal — Portal Institucional & Landing Page

Landing page oficial de **TecLegal S.A.S**, firma boutique con sede en Bogotá especializada en gestión integral de riesgos legales para el entorno empresarial transnacional, contratos internacionales y LegalTech.

Construida con **React + TypeScript + Vite**, optimizada para despliegue automático en **GitHub Pages**.

---

## 🎨 Identidad Visual y Marca
- **Nombre oficial:** TecLegal (no TechLegal).
- **Tipografía:** Montserrat (Google Fonts: 300, 400, 500, 600, 700, 800).
- **Paleta de Colores Institucional:**
  - `Azul Marino Principal`: `#1e335e`
  - `Azul Noche Profundo`: `#0a1937`
  - `Magenta / Carmín Institucional`: `#ac1259`
  - `Dorado Cálido Marca`: `#e2c509` / `#ffd41c`
  - `Superficie / Blanco`: `#ffffff`
  - `Fondos Neutros Claros`: `#f8fafc` / `#f1f5f9`

---

## 🚀 Desarrollo Local

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Ejecutar servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Construir para producción:
   ```bash
   npm run build
   ```

4. Previsualizar compilación:
   ```bash
   npm run preview
   ```

---

## 🌐 Despliegue en GitHub Pages

Este repositorio cuenta con un workflow de **GitHub Actions** en `.github/workflows/deploy.yml` que compila y publica automáticamente el sitio en GitHub Pages con cada `push` a la rama principal (`master` o `main`).

Para activar GitHub Pages en el repositorio:
1. En GitHub, ingrese a **Settings > Pages**.
2. En **Build and deployment > Source**, seleccione **GitHub Actions**.
3. Al realizar el siguiente commit o push, GitHub Pages se desplegará automáticamente.
