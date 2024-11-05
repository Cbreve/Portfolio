import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
import App from './App';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// Import Font Awesome
// import '@fortawesome/fontawesome-free/css/all.min.css';

// Import base Tailwind styles
import './index.css';

// Tailwind configuration
const tailwindConfig = {
  theme: {
    extend: {
      colors: {
        'brand': {
          'primary': '#4697b5',
          'dark': '#0A0A0A',
          'card': '#1A1A1A',
          'text': '#6B7280'
        }
      },
      fontSize: {
        '7xl': '5rem',
      },
      borderRadius: {
        'card': '1.5rem'
      }
    }
  }
};

if (window.tailwind) {
  window.tailwind.config = tailwindConfig;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);