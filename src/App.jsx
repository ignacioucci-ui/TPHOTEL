import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Inicio from './Inicio';
import Acerca from './Acerca';
import ProyectoBlob from './proyectoBlob';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="mi-header">
          <h2>Mi Aplicación</h2>
          <nav className="navegacion">
            <Link to="/" className="btn-nav">Inicio</Link>
            <Link to="/acerca" className="btn-nav">Acerca de</Link>
            <Link to="/proyecto" className="btn-nav">Proyecto (Blob)</Link>
          </nav>
        </header>

        <main className="mi-contenido">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/acerca" element={<Acerca />} />
            <Route path="/proyecto" element={<ProyectoBlob />} />
          </Routes>
        </main>

        <footer className="mi-footer">
          <p>Pie de página</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}
