import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Inicio from './Inicio';
import About from './About';
import Contact from './Contact';
import Reservas from './Reservas';

export default function App() {
  return (
    <BrowserRouter>
      <div className="hotel-app">
        <header className="header">
          <h2>Hotel Paraíso</h2>
          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/about">Acerca de</Link>
            <Link to="/reservas">Reservas</Link>
            <Link to="/contact">Contacto</Link>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/about" element={<About />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2026 Hotel Paraíso - Desarrollado por Ignacio</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}