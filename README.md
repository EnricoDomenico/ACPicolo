# AIC Picolo - Law Firm Website

A sophisticated, pixel-perfect recreation of a luxury law firm website built with React, Tailwind CSS, and Framer Motion. Features elegant animations, scroll-triggered reveals, and a modern, professional design.

## 🚀 Features

- **Sophisticated Animations**: Smooth scroll-triggered reveals, stagger animations, and counting effects
- **Parallax Effects**: Subtle parallax scrolling on hero background
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Modern Stack**: React 18, Tailwind CSS 3, Framer Motion 10
- **Pixel-Perfect UI**: High-fidelity implementation matching the design reference

## 📋 Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up image assets:**
   
   Create a `public` folder in the root directory if it doesn't exist, then add:
   
   - **`public/hero-bg.png`** - Hero section background image (dark modern office/building image)
   - **`public/team-photo.jpg`** - Professional team photo (4 people in business attire)
   
   If these images are not provided, the site will display placeholder backgrounds gracefully.

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📁 Project Structure

```
ACPicolo/
├── public/
│   ├── hero-bg.png          # Hero background image
│   └── team-photo.jpg       # Team section photo
├── src/
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # React entry point
│   └── index.css            # Tailwind imports & custom styles
├── index.html               # HTML template
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── vite.config.js           # Vite configuration
```

## 🎨 Key Design Elements

### Typography
- **Headings**: Playfair Display (serif) - elegant, professional
- **Body Text**: Inter (sans-serif) - clean, modern, readable

### Color Palette
- **Dark Charcoal**: `#1a1a1a`, `#2a2a2a` - primary dark backgrounds
- **Light Grey**: `#f5f5f5`, `#e5e5e5` - section backgrounds
- **White**: Text and accents

### Sections
1. **Fixed Navbar** - Transparent initially, solid on scroll
2. **Hero Section** - Full-screen with parallax background
3. **Stats Bar** - Floating dark card with animated counting numbers
4. **Services Section** - Two-column layout with staggered list items
5. **Differentials Section** - 4-column grid with icons
6. **Team Section** - Split layout (text + image)
7. **Footer** - Centered logo and CTA

## ✨ Animation Highlights

- **Navbar**: Fade down on load, underline hover effect on links
- **Hero**: Staggered reveal (headline → text → button), parallax background
- **Stats**: Slide up on load, numbers count up when in viewport
- **Services**: Fade from left/right, staggered list items
- **Differentials**: Pop-up icons, staggered card reveals
- **Team**: Slide in from opposite sides
- **All Sections**: Scroll-triggered animations using Intersection Observer

## 🎯 Performance Notes

- Uses `useInView` hook for scroll-triggered animations (once only)
- Implements React.StrictMode for development best practices
- Optimized with Vite for fast HMR and builds
- Lazy-loaded animations prevent layout shift

## 🖼️ Image Requirements

### Hero Background (`/public/hero-bg.png`)
- Recommended size: 1920x1080px or higher
- Style: Modern office building, dark/dramatic lighting
- Format: PNG or JPG

### Team Photo (`/public/team-photo.jpg`)
- Recommended size: 800x600px or higher
- Style: 4 professionals in business attire
- Format: JPG

## 🔧 Customization

### Changing Colors
Edit `tailwind.config.js`:
```js
colors: {
  charcoal: {
    900: '#your-color',
    800: '#your-color',
  },
  // ... more colors
}
```

### Changing Fonts
Edit `index.html` to change Google Fonts links, then update `tailwind.config.js`:
```js
fontFamily: {
  serif: ['Your Serif Font', 'serif'],
  sans: ['Your Sans Font', 'sans-serif'],
}
```

### Adjusting Animation Speed
In `App.jsx`, modify `duration` values in Framer Motion components:
```jsx
transition={{ duration: 0.8 }} // Slower
transition={{ duration: 0.4 }} // Faster
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is for demonstration purposes.

## 🤝 Contributing

This is a client project recreation. For modifications, please contact the project owner.

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**
