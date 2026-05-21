# WMP Transform Engine v1.5

An interactive, high-performance WebGL particle engine built with Three.js that dynamically morphs between multiple `.obj` 3D mesh files based on real-time audio frequency and spectral analysis.

## 🚀 Features

* **Multi-OBJ Morphing:** Load multiple 3D models concurrently; the particle matrix smoothly interpolates coordinates to transform from one complex shape to another.
* **Audio-Reactive Physics Styles:** Includes 5 built-in transformation behaviors (Spherical Pulse, Plasma Field Displacer, Kinematic Gear Twist, Magnetic Field Lines, Digital Soundwave Fountain) plus support for external visual registries.
* **Sub-Bass Beat Detection:** Automatically triggers shape mutations and camera perspective shifts on configurable bass thresholds.
* **Interactive Controls Matrix:** Real-time adjustments for global scale, position translations, base rotations, and audio sensitivity configuration.
* **Dynamic Ambient Lighting Overlay:** A responsive gradient layer that maps low, mid, and high frequencies onto individual CSS HSL channels for responsive background illumination.

## 🛠️ Setup & Usage

Since this project uses modern web APIs (`AudioContext`) and files loaded dynamically via `FileReader`, it is best viewed via a local web server rather than opening the file directly in a browser.

### Option 1: Live Server (VS Code)
1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension by Ritwick Dey.
3. Click **Go Live** in the bottom status bar.

### Option 2: Python HTTP Server
Run one of the following commands in your project directory using your terminal:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000