// Copia el sitio estático a la carpeta dist/ (la usa Vercel al publicar).
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const out = path.join(root, "dist");
const files = ["index.html", "styles.css", "script.js", "config.js", "assets"];

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out);
for (const f of files) {
  fs.cpSync(path.join(root, f), path.join(out, f), { recursive: true });
}
console.log("Sitio listo en dist/");
