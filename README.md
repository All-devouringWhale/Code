# Habit RPG: native Android project (Capacitor)

Wraps `../prototype/index.html` in a native Android app. Open the repo root in VS Code.

## One-time setup
1. Install **Node 22+**, **JDK 21** and the **Android SDK**. The easiest way to get the SDK and JDK is to install Android Studio once (you do not have to use it afterwards). Set `ANDROID_HOME` to the SDK folder (Android Studio shows it under Settings, Android SDK).
2. In VS Code: Terminal, then `cd app` and `npm install`.
3. `npm run setup` creates the `android/` folder. Commit it: it is where the native widget and calendar code will live.
4. `npm run doctor` checks your setup.

## Every day
| Command | What it does |
|---|---|
| `npm run web` | Preview the web app at http://localhost:8080 |
| `npm run sync` | Copy `prototype/index.html` into the Android project |
| `npm run apk` | Sync, then build `android/app/build/outputs/apk/debug/app-debug.apk` |
| `npm run run` | Build and run on a connected phone (USB debugging) or emulator |
| `npm run studio` | Open the Android project in Android Studio |

In VS Code you can also press Ctrl+Shift+B (Cmd+Shift+B on Mac) to build the APK, or use Terminal, Run Task and pick a "Habit RPG" task.

## Install the APK on your phone
Copy `app-debug.apk` to the phone and open it, or run `adb install -r app/android/app/build/outputs/apk/debug/app-debug.apk`.

## Troubleshooting
- "SDK location not found": set `ANDROID_HOME`, or create `android/local.properties` containing `sdk.dir=/path/to/Android/Sdk`.
- Java version errors: make sure `java -version` shows 21.
- Capacitor packages must all be the same major version.
