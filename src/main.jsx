import React from 'react';
import { createRoot } from 'react-dom/client';
import 'swiper/css';
import './styles/vendors.css';
import './styles/original.css';
import './styles/blocks.css';
import './styles/react.css';
import App from './App';

createRoot(document.getElementById('root')).render(<App />);
