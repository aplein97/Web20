Das ist das Frontend Repository von Gruppe 4.

Link zum Backend: https://github.com/andersenhenrik/Web20Backend

# How to start
- git clone 
- git checkout yourBranch
- https://reactnative.dev/docs/environment-setup ggf. befolgen und react-native oder expo Environment einrichten

Dann Android Studio Device (Emulator) starten oder Handy per Kabel anschließen.
Im Ordner InterAccountBot PowerShell Fenster öffnen und folgende Kommandos ausführen:
- npm i 		(installiert alle notwendigen Pakete)
- expo start oder alternativ: npx react-native run-android (wenn statt expo der react-native CLI genutzt wird)

Jetzt wird sich automatisch ein Browserfenster auf localhost:xy öffnen. Das ist Metro; Metro wird zum bundlen der Anwendung verwendet. "Run on Android device/emulator" auswählen, wenn ihr Android Studio richtig konfiguriert habt, wird euch auf dem Device "Open up App.js to start working on your app!" angezeigt - der bisherige Inhalt unserer App.

