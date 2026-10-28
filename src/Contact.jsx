import React from 'react';

export default function Contact() {
  return (
    <div className="section contact">
      <h2>Contacto</h2>
      <p>Escribinos directamente a: <strong>contacto@hotelparaiso.com</strong></p>
      <form className="formulario">
        <input type="text" placeholder="Nombre completo" required />
        <input type="email" placeholder="Correo electrónico" required />
        <textarea placeholder="Escribí tu consulta acá..." rows="4" required></textarea>
        <button type="button">Enviar Mensaje</button>
      </form>
    </div>
  );
}