# Jank Client Desktop
Jank Client Desktop is a Tauri desktop client for [MathMan05/JankClient](https://github.com/MathMan05/JankClient) with incorporations of my fork [phoebe-leong/JankClient](https://github.com/phoebe-leong/JankClient).  

Please follow [semantic versioning conventions](https://semver.org/).  

> **Jank Client Desktop is currently only tested on MacOS.**  
> **If you would like to help test new code on different machines (e.g., Linux, Windows, FreeBSD, TempleOS, whatever...), please make an issue.**
  
## Building locally
### Installing Dependencies
1. Install NodeJS [here](https://nodejs.org) (this also gives you npm, which we will need to install Tauri).
2. Install Rust using [this guide](https://tauri.app/v1/guides/getting-started/prerequisites/) from the Tauri documentation.
3. Install Tauri by typing ``npm install --save-dev @tauri-apps/cli`` in your Terminal or Command Line at the project's directory.
### Building
Run ``npm run tauri build`` in your Terminal or Command Line and wait for the project to build. Once it finishes, save it to your computer.
