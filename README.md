# 🎮 Immersive Minecraft Model

> A stunning 3D website that brings the beloved Minecraft aesthetic to life through cutting-edge web technologies.

**[🌐 Live Demo](https://my-minecraft.vercel.app/)** | **[📁 Blender Assets](https://drive.google.com/drive/folders/1xrkCNELEefpR9clwLTjk-HQ2uRkQzaHy?usp=sharing)**

![Portfolio Preview](public/media/og/og-image.webp?raw=true "Interactive Minecraft-style portfolio homepage")

---

## 🌟 Overview

This model transcends traditional web experiences by immersing visitors in a fully interactive 3D Minecraft-inspired world. Built with modern web technologies, it showcases creative projects through explorable environments, interactive elements, and stunning visual effects.

## ✨ Key Features

### 🎨 **Visual Excellence**
- **Immersive 3D Environments**: Fully navigable Minecraft-style worlds built with Three.js
- **Custom Blender Models**: Handcrafted 3D assets optimized for web performance
- **Dynamic Lighting**: Realistic shadows and lighting effects using GLSL shaders
- **Particle Systems**: Engaging visual effects and animations

### 🚀 **Technical Excellence**
- **High Performance**: Optimized 3D rendering with efficient asset loading
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile
- **Smooth Animations**: Fluid transitions powered by GSAP
- **Cross-Browser Support**: Compatible with all modern browsers

### 🏆 **Award-Winning Design**
- Recognized for innovation in interactive web design
- Featured in creative coding showcases
- Praised for seamless UI/UX integration

---

## 🛠️ Technology Stack

### **Frontend Framework**
- **React 18+** - Component-based architecture
- **Three.js** - 3D graphics and WebGL rendering
- **React Router** - Client-side routing

### **3D Pipeline**
- **Blender** - 3D modeling and scene creation
- **GLTF/GLB** - Optimized 3D asset format
- **GLSL** - Custom shaders for advanced effects

### **Styling & Animation**
- **CSS/SCSS Modules** - Component-scoped styling
- **GSAP** - High-performance animations
- **Responsive Grid System** - Mobile-first design

### **Build Tools**
- **Vite** - Fast development and optimized builds
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16.0.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/woan-minecraft-folio.git
   cd woan-minecraft-folio-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

---

## 📁 Project Structure

```
woan-minecraft-folio-main/
│
├── 📁 public/                 # Static assets
│   ├── 📁 media/              # Images, videos, og images
│   ├── 📁 models/             # 3D models (.glb/.gltf)
│   └── 📄 favicon.ico         # Site favicon
│
├── 📁 src/                    # Source code
│   ├── 📁 assets/             # 3D assets, textures, shaders
│   │   ├── 📁 models/         # 3D model files
│   │   ├── 📁 textures/       # Texture maps
│   │   └── 📁 shaders/        # GLSL shader files
│   │
│   ├── 📁 components/         # Reusable React components
│   │   ├── 📁 3D/             # Three.js components
│   │   ├── 📁 UI/             # Interface components
│   │   └── 📁 Layout/         # Layout components
│   │
│   ├── 📁 pages/              # Route components
│   │   ├── 📄 Home.jsx        # Landing page
│   │   ├── 📄 About.jsx       # About section
│   │   └── 📄 Projects.jsx    # Project showcase
│   │
│   ├── 📁 styles/             # Global styles
│   │   ├── 📄 globals.scss    # Global styles
│   │   └── 📄 variables.scss  # SCSS variables
│   │
│   ├── 📁 utils/              # Utility functions
│   │   ├── 📄 three-helpers.js # Three.js utilities
│   │   └── 📄 loaders.js      # Asset loaders
│   │
│   ├── 📄 main.jsx            # Application entry point
│   └── 📄 App.jsx             # Main App component
│
├── 📄 package.json            # Project dependencies
├── 📄 vite.config.js          # Vite configuration
├── 📄 .eslintrc.js            # ESLint configuration
└── 📄 README.md               # This file
```

---

## 🎨 3D Assets & Design

### **Blender Workflow**
- **Scene Creation**: Designed in Blender with modular components
- **Asset Optimization**: Models optimized for web performance
- **Texture Baking**: Efficient UV mapping and texture compression
- **Animation Export**: Smooth animations exported as GLB files

### **Download Assets**
Access the complete Blender project files:
- [📁 Blender Files](https://drive.google.com/drive/folders/1xrkCNELEefpR9clwLTjk-HQ2uRkQzaHy?usp=sharing)
- Includes source `.blend` files, textures, and export settings

### **Asset Guidelines**
- Models are exported as `.glb` format for optimal loading
- Textures are compressed for web delivery
- LOD (Level of Detail) versions for performance scaling

---

## 🌐 Deployment

### **Production Build**
```bash
npm run build
```

### **Deployment Options**
- **Vercel**: Connect GitHub repo for automatic deployments
- **Netlify**: Drag-and-drop or Git integration
- **GitHub Pages**: Static hosting for the built files
- **Custom Server**: Deploy to your own hosting solution

### **Environment Variables**
Create a `.env` file for configuration:
```env
VITE_SITE_URL=https://your-domain.com
VITE_ANALYTICS_ID=your-analytics-id
```

---

## 🤝 Contributing

We welcome contributions from the community! Here's how to get started:

### **Getting Started**
1. **Fork** the repository
2. **Clone** your fork locally
3. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
4. **Make** your changes
5. **Test** thoroughly
6. **Commit** with descriptive messages
7. **Push** to your fork
8. **Open** a Pull Request

### **Contribution Guidelines**
- Follow the existing code style
- Add comments for complex logic
- Update documentation for new features
- Include tests where applicable
- Ensure responsive design compatibility

### **Issues & Bugs**
Found a bug? Have a suggestion? [Open an issue](https://github.com/yourusername/woan-minecraft-folio/issues) with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Browser/device information

---

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 80+ |
| Firefox | 75+ |
| Safari | 13+ |
| Edge | 80+ |

*Note: WebGL support required for 3D features*

---

## 🔧 Performance Optimization

### **Loading Strategies**
- Progressive asset loading
- Texture compression and caching
- Efficient geometry optimization
- Level-of-detail (LOD) implementation

### **Monitoring**
- Bundle size optimization
- Frame rate monitoring
- Memory usage tracking
- Network performance metrics

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

### **Inspiration & Resources**
- [🏠 House Design Inspiration](https://youtu.be/lkJ8zbYotGQ) - Architectural reference
- [📚 Three.js Documentation](https://threejs.org/docs/) - 3D graphics library
- [🎨 Blender Community](https://www.blender.org/) - 3D modeling software
- [💡 Creative Coding Community](https://openprocessing.org/) - Inspiration and techniques

### **Special Thanks**
- The open-source community for amazing tools and libraries
- Beta testers who provided valuable feedback
- Contributors who helped improve the project

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/woan-minecraft-folio?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/woan-minecraft-folio?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/woan-minecraft-folio)
![GitHub license](https://img.shields.io/github/license/yourusername/woan-minecraft-folio)

---

*"Crafting digital experiences that bridge the gap between imagination and reality."*
