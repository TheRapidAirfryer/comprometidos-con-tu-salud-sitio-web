# Comprometidos con tu Salud

Sitio web de una distribuidora independiente de productos Omnilife y Seytu. Es un sitio estático (HTML, CSS y JavaScript, sin dependencias), con botones que llevan a los clientes directo a WhatsApp.

## Cambiar tus datos

Abre `config.js` y cambia:

- `whatsapp`: tu número con código de país, solo dígitos. Ejemplo para México: `5215512345678`.
- `telefonoVisible`, `correo`, `zona`, `horario`: lo que se muestra en la sección de contacto.
- `facebook`, `instagram`, `tiktok`: enlaces a tus redes (deja `""` para ocultarlas).

## Cambiar o agregar productos

En `index.html`, dentro de la sección `productos`, cada producto es un bloque `<article class="product">`. Copia uno y cambia el nombre, la descripción y `data-producto` (el texto que se envía por WhatsApp). Para poner una foto, guarda la imagen en `assets/img/productos/` y reemplaza el `<div class="product__img ...">` por:

```html
<img class="product__photo" src="assets/img/productos/mi-foto.jpg" alt="Nombre del producto">
```

Usa fotos propias o material que te compartan para promocionar; procura que se vean nítidas (al menos 600 px de ancho).

## Publicar gratis con GitHub Pages

1. En GitHub, ve a **Settings → Pages**.
2. En **Source**, elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`.
3. Guarda. En unos minutos el sitio estará en `https://therapidairfryer.github.io/comprometidos-con-tu-salud-sitio-web/`.

## Ver el sitio en tu computadora

Necesitas tener [Node.js](https://nodejs.org) instalado (versión 18 o más reciente). En la carpeta del proyecto:

```bash
npm install      # solo la primera vez
npm run dev      # abre el sitio en http://localhost:5173
```

Mientras esté corriendo, cada cambio que guardes se ve al instante en el navegador. Para detenerlo, presiona `Ctrl + C`.

También puedes abrir `index.html` con doble clic, sin instalar nada.
