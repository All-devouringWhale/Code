// Runs the Gradle wrapper in android/ on Windows, macOS and Linux.
const { spawnSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const dir = path.join(__dirname, "..", "android");
if (!fs.existsSync(dir)) {
  console.error("No android/ folder yet. Run:  npm run setup");
  process.exit(1);
}
const win = process.platform === "win32";
const cmd = win ? "gradlew.bat" : "./gradlew";
const args = process.argv.slice(2);
const r = spawnSync(cmd, args, { cwd: dir, stdio: "inherit", shell: win });
if (r.error) { console.error(r.error.message); process.exit(1); }
if (r.status === 0 && args[0] === "assembleDebug") {
  console.log("\nAPK: app/android/app/build/outputs/apk/debug/app-debug.apk");
}
process.exit(r.status === null ? 1 : r.status);
