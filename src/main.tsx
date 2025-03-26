import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Оптимизированная инициализация приложения
const root = document.getElementById('root')!;

// Используем createRoot с оптимизированными настройками
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
