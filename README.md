# 💱 CurrencyPro - Professional Currency Converter

A modern, responsive, and feature-rich currency conversion web application built with React, Vite, and Tailwind CSS. Experience real-time currency exchange rates with a beautiful, professional interface.

![CurrencyPro Preview](https://via.placeholder.com/800x400/1e293b/60a5fa?text=CurrencyPro+Preview)

## ✨ Features

### 🚀 **Core Functionality**
- **Real-time Exchange Rates**: Live currency conversion with up-to-date rates
- **150+ Currencies**: Support for all major world currencies and cryptocurrencies
- **Instant Conversion**: Real-time conversion as you type
- **Currency Swap**: Easy swap between source and target currencies

### 🎨 **Modern Design**
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Dark Theme**: Beautiful gradient backgrounds with glass-morphism effects
- **Smooth Animations**: Hover effects and transitions throughout
- **Professional UI**: Clean, modern interface with attention to detail

### 🔧 **Technical Features**
- **Component Architecture**: Modular, reusable React components
- **Performance Optimized**: Fast loading with Vite build system
- **Type-Safe**: ESLint configuration for code quality
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1 with Hooks
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.13
- **Icons**: Heroicons (SVG)
- **API**: Free Currency API
- **Linting**: ESLint with React rules
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

### Dependencies
- `react`: ^19.1.1
- `react-dom`: ^19.1.1

### Dev Dependencies
- `@vitejs/plugin-react`: ^5.0.3
- `tailwindcss`: ^4.1.13
- `eslint`: ^9.36.0
- `autoprefixer`: ^10.4.21
- `postcss`: ^8.5.6

## 📁 Project Structure

```
Currency_Convertor/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── bg.png                 # Background image
│   ├── components/
│   │   ├── Header.jsx             # Navigation header
│   │   ├── Hero.jsx               # Hero section with converter
│   │   ├── Features.jsx           # Features showcase
│   │   ├── HowToUse.jsx           # Usage instructions
│   │   ├── Footer.jsx             # Footer with links
│   │   └── InputBox.jsx           # Reusable input component
│   ├── hooks/
│   │   └── useCurrencyInfo.js     # Custom hook for API calls
│   ├── App.jsx                    # Main app component
│   └── main.jsx                   # App entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Currency_Convertor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5175`

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📖 Usage

### Basic Conversion
1. Enter the amount you want to convert
2. Select the source currency from the dropdown
3. Select the target currency
4. Click the swap button to reverse currencies
5. View the converted amount instantly

### Features Overview
- **Real-time Rates**: Exchange rates update automatically
- **Responsive Design**: Works on all device sizes
- **Smooth Navigation**: Scroll to different sections
- **Professional UI**: Modern design with animations

## 🎯 Components

### Header Component
- Navigation menu with smooth scrolling
- Responsive mobile menu
- Brand logo and styling

### Hero Component
- Full-screen background with overlay
- Currency converter form
- Call-to-action design

### Features Component
- Showcase of key benefits
- Animated cards with hover effects
- Professional icons

### HowToUse Component
- Step-by-step instructions
- Numbered process flow
- Clear user guidance

### Footer Component
- Company information
- Social media links
- Quick navigation links

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
# Add any environment variables here
VITE_API_BASE_URL=https://api.example.com
```

### Tailwind Configuration
The project uses custom Tailwind configuration in `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 API Integration

The app uses the free Currency API for real-time exchange rates:
- **Endpoint**: `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/`
- **Rate Limit**: Respects API limitations
- **Error Handling**: Graceful error handling for API failures

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Vite](https://vitejs.dev/) - Build tool and dev server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Heroicons](https://heroicons.com/) - Beautiful hand-crafted SVG icons
- [Free Currency API](https://github.com/fawazahmed0/currency-api) - Exchange rate data

## 📞 Support

For support, email support@currencypro.com or join our Discord community.

---

**Built with ❤️ for accurate currency conversions**
