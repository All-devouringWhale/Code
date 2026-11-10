// Copies the prototype (the single source of truth) into www/ for Capacitor.
const fs = require("fs");
const path = require("path");
const src = path.join(__dirname, "..", "..", "prototype", "index.html");
const destDir = path.join(__dirname, "..", "www");
if (!fs.existsSync(src)) {
  console.error("Cannot find " + src + "\nPut the prototype in <repo>/prototype/index.html first.");
  process.exit(1);
}
fs.mkdirSync(destDir, { recursive: true });
fs.copyFileSync(src, path.join(destDir, "index.html"));
console.log("Copied prototype/index.html -> app/www/index.html");
