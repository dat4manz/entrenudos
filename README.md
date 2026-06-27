ş# 🌿 Tienda de Macramé Boho - Guía Completa

## 📁 Estructura de archivos

```
tienda-macrame/
├── index.html          # Página principal (HTML)
├── styles.css          # Estilos (CSS boho)
├── script.js           # Interactividad (JavaScript)
├── /img                # Carpeta para imágenes (crear)
│   ├── hero.jpg
│   ├── about.jpg
│   ├── productos/
│   │   ├── producto-1.jpg
│   │   ├── producto-2.jpg
│   │   └── ...
│   └── og-image.jpg    # Para redes sociales
└── README.md           # Este archivo
```

---

## 🚀 Instalación Rápida

### Opción 1: En tu computadora (local)
1. Crea una carpeta llamada `tienda-macrame`
2. Descarga/copia los 3 archivos (`index.html`, `styles.css`, `script.js`) en la carpeta
3. Abre `index.html` en tu navegador (doble clic)
4. ¡Listo! Verás la web funcionando

### Opción 2: En un servidor (para publicar en internet)
1. Contrata hosting (recomendado: Namecheap, SiteGround, Bluehost)
2. Sube los 3 archivos vía FTP a tu hosting
3. Compra un dominio (mitiendamacrame.es)
4. Conecta el dominio al hosting
5. ¡Tu web está en internet!

### Opción 3: Hosting gratuito (para probar)
- **Netlify.com** (recomendado) - Conecta GitHub, sube archivos directamente
- **Vercel.com** - Similar a Netlify
- **GitHub Pages** - Si usas Git

---

## 🎨 Personalización

### 1. Cambiar Colores Boho
Abre `styles.css` y busca la sección `VARIABLES Y COLORES`:

```css
:root {
    --primary: #8B7355;        /* Marrón tierra */
    --primary-dark: #6B5344;
    --primary-light: #C4A98A;  /* Beige cálido */
    --accent: #D4A574;         /* Terracota suave */
    ...
}
```

**Paleta boho recomendada:**
- Marrón tierra: `#8B7355`
- Beige: `#C4A98A`
- Terracota: `#D4A574`
- Crema: `#F5F1ED`

Puedes usar: https://coolors.co para generar paletas

### 2. Cambiar Textos
Abre `index.html` y busca/reemplaza:
- **Nombre tienda**: "Macramé Artesanal" → Tu nombre
- **Descripción**: En la sección `<head>`, en `<meta name="description">`
- **Contacto**: Email, teléfono, ubicación

### 3. Añadir tu Logo
```html
<!-- En index.html, reemplaza la sección logo: -->
<div class="logo">
    <img src="img/logo.png" alt="Tu Logo" style="height: 40px;">
</div>
```

### 4. Añadir Fotos de Productos
Reemplaza los placeholders con tus imágenes:

```html
<!-- Antes (placeholder): -->
<div class="placeholder-product">Foto Producto</div>

<!-- Después (con tu imagen): -->
<img src="img/productos/colgante-1.jpg" alt="Colgante Boho Natural">
```

**Recomendaciones de fotos:**
- Mínimo 1000x1000px de resolución
- Fondo blanco o natural
- 3-5 fotos por producto (diferentes ángulos)
- Comprime con: https://tinypng.com (mantiene calidad, menos peso)

---

## 📧 Formulario de Contacto

### Opción 1: Usar Formspree (RECOMENDADO)
Es gratis y muy fácil. Recibe emails sin backend propio.

**Paso 1:** Ve a https://formspree.io/
**Paso 2:** Sign up con tu email
**Paso 3:** Crea un nuevo form
**Paso 4:** Copia tu ID (ej: `m/xjjkjdkd`)
**Paso 5:** Reemplaza en `index.html`:

```html
<!-- Reemplaza esta línea: -->
<form id="contactForm">

<!-- Por esta: -->
<form action="https://formspree.io/f/TU_ID_AQUI" method="POST">
```

Listo. Los emails irán a tu correo automáticamente.

### Opción 2: Usar Netlify Forms (si alojas en Netlify)
```html
<form name="contacto" method="POST" netlify>
    <!-- Netlify detecta el formulario automáticamente -->
</form>
```

### Opción 3: Backend propio (avanzado)
Si quieres más control, necesitas:
- Servidor con PHP o Node.js
- Configurar SMTP para enviar emails

---

## 🛒 Integrar con Shopify

Una vez que la web esté lista, puedes integrar Shopify de 3 formas:

### Forma 1: Carrito de Shopify en tu web (Recommended)
1. Crea tienda en Shopify
2. Usa Shopify Buy Button (embed carrito en tu web)
3. Los productos se venden desde tu dominio

### Forma 2: Redirección a Shopify
En lugar de vender en tu web, los botones redirigen a Shopify:

```html
<a href="https://tu-tienda.myshopify.com/products/colgante" class="btn">
    Ver en tienda
</a>
```

### Forma 3: Integración completa (Headless)
Usa API de Shopify + tu propia interfaz. (Más complejo)

---

## 🔍 SEO - Posicionar en Google

### Paso 1: Meta tags (ya están en HTML)
```html
<meta name="description" content="Tienda de macramé artesanal boho...">
<meta name="keywords" content="macramé, boho, decoración...">
<meta property="og:image" content="/og-image.jpg">
```

### Paso 2: Estrutura H1/H2
- **1 H1 por página** ✓ (ya está en hero)
- **H2 para secciones** ✓ (ya están)
- **Texto alt en imágenes:**
```html
<img src="producto.jpg" alt="Colgante macramé boho natural 45cm">
```

### Paso 3: Velocidad
Comprime imágenes: https://tinypng.com
Verifica velocidad: https://pagespeed.web.dev

### Paso 4: Sitemap y robots.txt
```html
<!-- Añade a <head>: -->
<link rel="sitemap" type="application/xml" href="/sitemap.xml">
```

Genera gratis en: https://www.xml-sitemaps.com

### Paso 5: Google Search Console
1. Ve a https://search.google.com/search-console
2. Añade tu dominio
3. Sube el sitemap
4. Monitorea posicionamiento

---

## 📱 Mobile Responsivo

La web ya es responsive (se adapta a móvil). Para verificar:
1. Abre en navegador
2. Presiona `F12` (Developer Tools)
3. Haz clic en icono de móvil (Responsive Design Mode)
4. Prueba en iPhone, iPad, Android

---

## 🔒 Seguridad y GDPR (España)

### Obligatorio para España:
1. **Política de Privacidad** → En footer (ya hay enlace)
2. **Términos de Servicio** → En footer
3. **Cookie Banner** → Necesitas uno para cumplir RGPD

Genera política gratuita: https://www.termly.io/

### Añadir Cookie Banner (simple):
```html
<!-- Añade al final de <body> antes de </body>: -->
<div id="cookieBanner" style="position: fixed; bottom: 0; width: 100%; background: #8B7355; color: white; padding: 20px; text-align: center; z-index: 999;">
    <p>Usamos cookies para mejorar tu experiencia. <a href="#" style="color: #D4A574;">Política de Privacidad</a></p>
    <button onclick="document.getElementById('cookieBanner').style.display='none'" style="background: #D4A574; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Aceptar</button>
</div>
```

---

## 📊 Analytics y Seguimiento

### Google Analytics (gratuito)
1. Ve a https://analytics.google.com
2. Crea cuenta y propiedad
3. Copia tu código de seguimiento
4. Añade a `<head>` en HTML:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXX');
</script>
```

---

## 🐛 Troubleshooting

### Problema: Las imágenes no se muestran
**Solución:** Verifica las rutas. Deben estar en carpeta `/img`
```html
<!-- ✓ Correcto: -->
<img src="img/producto.jpg">

<!-- ✗ Incorrecto: -->
<img src="producto.jpg">
<img src="img/img/producto.jpg">
```

### Problema: CSS no carga
**Solución:** Asegúrate que `styles.css` esté en la misma carpeta que `index.html`

### Problema: Menú móvil no funciona
**Solución:** Verifica que `script.js` esté cargando sin errores (F12 → Console)

### Problema: Formulario no envía emails
**Solución:** 
- ¿Usas Formspree? Verifica que tu ID sea correcto
- ¿Primero local? Los emails no funcionan en localhost, solo en servidor

---

## 🎯 Checklist Pre-Lanzamiento

- [ ] Logo personalizado
- [ ] Todas las fotos de productos subidas
- [ ] Descripción de productos completas
- [ ] Email y teléfono correctos
- [ ] Formulario de contacto funciona (test)
- [ ] Texto "Nosotros" personalizado
- [ ] Colores boho adaptados a tu marca
- [ ] Menú móvil probado en móvil real
- [ ] Google Analytics configurado
- [ ] Política de privacidad y términos (enlaces)
- [ ] Velocidad carga > 75 (PageSpeed Insights)
- [ ] Sin errores en console (F12)
- [ ] Dominio comprado y conectado
- [ ] SSL/HTTPS activado (automático en hosting bueno)

---

## 📚 Próximos Pasos

### Corto plazo (esta semana):
1. Personaliza colores y textos
2. Sube fotos de productos
3. Publica en hosting
4. Verifica que todo funcione

### Mediano plazo (este mes):
1. Integra Shopify para pagos
2. Configura Google Analytics
3. Optimiza SEO (keywords)
4. Lanza campaña en redes sociales

### Largo plazo (próximos 3 meses):
1. Recolecta reviews de clientes
2. Mejora basado en analítica
3. Expande catálogo de productos
4. Considera email marketing

---

## 💡 Tips Pro

1. **Usa Instagram + TikTok** para mostrar proceso de creación
2. **Reels/Videos cortos** funcionan mejor que fotos estáticas
3. **Sé consistente**: Posts 3-4 veces por semana
4. **Hashtags relevantes**: #macramé #boho #decoración #artesanal
5. **Colabora** con micro-influencers (regalales una pieza)
6. **Email marketing**: Mailchimp gratis para primeros 500 contactos

---

## 🆘 Soporte

Si tienes preguntas:
1. Consulta la documentación de tu hosting
2. Google es tu amigo (busca el error)
3. Comunidades:
   - Stack Overflow (problemas técnicos)
   - Reddit r/web_design
   - Discord de desarrollo web

---

## 📄 Licencia

Este código es tuyo. Úsalo como quieras. Solo pide permiso si lo compartes públicamente.

---

**Hecho con ♥ para creativos boho. Mucho éxito con tu tienda.** 🌿

