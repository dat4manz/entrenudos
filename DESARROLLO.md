# EntreNudos — Web Profesional de Macramé

## 📋 Archivos Creados

```
✅ index.html         — Home con hero asimétrico y productos destacados
✅ tienda.html        — Catálogo con filtros funcionales
✅ producto.html      — Página de detalle con galería y opciones
✅ nosotros.html      — Historia, proceso y valores
✅ styles.css         — CSS completo responsive (boho custom)
✅ script.js          — Interactividad (filtros, galería, menú mobile)
✅ shopify.js         — Stub para integración Shopify (reemplazable)
```

---

## 🚀 Visualizar en Local

### Opción 1: VS Code Live Server (Recomendado)
1. Abre la carpeta en VS Code
2. Instala extensión "Live Server" (si no la tienes)
3. Click derecho en `index.html` → "Open with Live Server"
4. La web se abrirá en `http://localhost:5500`

### Opción 2: Python (simple)
```bash
cd c:\Users\manz\Desktop\EntreNudos
python -m http.server 8000
```
Luego abre: `http://localhost:8000`

### Opción 3: Directamente (más básico)
Simplemente **doble-click en `index.html`** y se abre en navegador

---

## 🎨 Estructura Visual

### Identidad (Anti-plantilla)
- **Paleta:** Papel natural + Marrón tierra + Terracota + Verde salvia (diferenciador)
- **Tipografía:** Cormorant Garamond (display) + DM Sans (body)
- **Hero:** Asimétrico 55/45
- **Grid:** Mixto (no uniforme)
- **Separadores:** Secciones con fondo blanco alterno

### Responsive Completo
- ✅ Desktop (1200px+)
- ✅ Tablet (768px-1024px)
- ✅ Mobile (< 480px)

Prueba abriendo DevTools (F12) → responsive mode

---

## 📦 Próximos Pasos

### Inmediato (antes de publicar)
1. **Reemplaza placeholders con tus fotos**
   - `img/hero.jpg` — foto hero
   - `img/nosotros.jpg` — foto artesana
   - `img/productos/` — fotos de cada producto

2. **Personaliza textos**
   - Nombre artesana
   - Descripción de productos
   - Email y teléfono
   - Redes sociales reales

3. **Prueba filtros**
   - Ve a `tienda.html`
   - Haz clic en filtros (Colgantes, Tapices, etc.)
   - Verifica que funcionen correctamente

4. **Prueba galería de producto**
   - Entra a cualquier producto desde la tienda
   - Haz clic en thumbnails
   - Verifica que la imagen principal cambie

### Antes de Shopify (opcional pero recomendado)
1. **Compra hosting y dominio**
   - Recomendado: Netlify (gratis inicial), Bluehost (€3/mes), o SiteGround
   
2. **Sube los archivos**
   - Todos los `.html`, `.css`, `.js` a la raíz
   - Crea carpeta `img/` y sube tus fotos

3. **Configura dominio**
   - Ejemplo: entrenudos.com apunta a tu hosting

### Integración Shopify (cuando tengas tienda)
1. **Obtén Shopify Buy SDK**
   - Ve a tu tienda Shopify
   - Settings → Sales channels → Buy Button
   - Copia `storeDomain` y `storefrontAccessToken`

2. **Reemplaza `shopify.js`**
   - El archivo actual es un stub. Reemplázalo con el SDK real:
   ```js
   const client = ShopifyBuy.buildClient({
       domain: 'tu-tienda.myshopify.com',
       storefrontAccessToken: 'tu-token-aqui'
   });
   ```

3. **Los botones "Añadir al carrito" funcionarán automáticamente**

---

## 🔍 Testing Checklist

- [ ] Navegar entre todas las páginas (sin errores en console)
- [ ] Filtros en tienda.html funcionan
- [ ] Galería en producto.html funciona
- [ ] Menú hamburguesa funciona en móvil
- [ ] Responsive en 375px (móvil)
- [ ] Responsive en 768px (tablet)
- [ ] Responsive en 1200px+ (desktop)
- [ ] Header se vuelve blanco al scrollear
- [ ] Links internos con smooth scroll funcionan
- [ ] Carrito muestra contador (visual, no pagos reales aún)

---

## 🎯 Decisiones de Diseño (Anti-Plantilla)

✅ **No es aburrido uniforme:**
- Grid de productos asimétrico (primer producto ocupa 2×2 en home)
- Hero 55/40 (no 50/50 como plantillas estándar)
- Colores tierra + verde salvia (no colores típicos boho)

✅ **Tipografía Editorial:**
- Cormorant Garamond: elegante, diferente a "Playfair Display" de plantillas
- DM Sans: moderna y limpia, no serif para body

✅ **Micro-interacciones:**
- Header cambia color al scroll
- Products cards se animan al entrar en viewport
- Filtros tienen transición suave

✅ **Estructura clara:**
- 4 páginas reales (no single-page)
- URLs semánticas (tienda.html, producto.html, nosotros.html)
- Breadcrumbs y navegación clara

---

## 📱 Fotos: Qué Necesitas

**Para que se vea profesional, necesitas:**

1. **hero.jpg** (1200x600px mín)
   - Foto de un macramé "hero" o tu setup artesanal

2. **nosotros.jpg** (400x400px)
   - Foto tuya o tu espacio de trabajo

3. **productos/** (mín. 13 fotos, 1000x1000px c/u)
   - Colgantes (3 fotos)
   - Tapices (3 fotos)
   - Maceteros (3 fotos)
   - Atrapasueños (2 fotos)
   - Cortinas (2 fotos)

**Tips para fotos:**
- Fondo blanco o natural
- Iluminación natural (mañana/tarde)
- Que se vea el detalle de los nudos
- Comprime con tinypng.com (mantiene calidad, menos KB)

---

## 🔐 Seguridad / GDPR

Cuando publiques, añade:
1. Política de Privacidad (página enlazada en footer)
2. Términos y Condiciones
3. Cookie banner (si usas analytics)

Generador gratuito: https://www.termly.io/

---

## 📊 Analytics (Opcional)

Cuando publiques, añade Google Analytics:
1. Ve a https://analytics.google.com
2. Crea cuenta
3. Copia el script
4. Pégalo en `<head>` de todos los HTML (o en un fichero shared)

---

## ❓ FAQ del Desarrollo

**P: ¿Los filtros funcionan?**
R: Sí. Están en `tienda.html` y JavaScript los controla (mostrar/ocultar según categoría).

**P: ¿El carrito funciona?**
R: Ahora es un stub (solo cuenta items localmente). Cuando integres Shopify Buy SDK, enviarán a checkout real.

**P: ¿Cómo añado más productos?**
R: Copia un `<div class="product-card">` en `tienda.html` y cambia:
- `data-category="colgantes"` (o la categoría)
- `data-product-url="producto.html?id=X"`
- Título, precio, foto

**P: ¿Puedo cambiar colores?**
R: Sí. Edita el `:root` en `styles.css`:
```css
--sage: #8B9E7A;  /* Tu color aquí */
```

**P: ¿Necesito backend?**
R: No para ver la web en local. Cuando publiques, si quieres emails de contacto sin backend, usa Formspree.io (free).

---

## 📞 Contacto y Próximos Pasos

Cuando tengas tus fotos listas:
1. Crea carpeta `img/` en la raíz
2. Guarda: `hero.jpg`, `nosotros.jpg`, `productos/` con todas las fotos
3. Abre los HTML y busca `<div class="placeholder">` → reemplaza con `<img src="img/...">`

Necesitas ayuda:
- Mensajea si algo no funciona
- O sube las fotos y ajustamos juntos

---

**¡Tu tienda está lista para crecer! 🌿**
