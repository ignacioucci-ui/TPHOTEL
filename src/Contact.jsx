import React, { useState } from 'react';

export default function Contact() {
  const [mensajeExito, setMensajeExito] = useState(false);

  const enviarMail = (e) => {
    e.preventDefault();
    setMensajeExito(true);
    e.target.reset(); 
    
    setTimeout(() => {
      setMensajeExito(false);
    }, 3000);
  };

  return (
    <div className="section contact">
      <h2>Contacto</h2>
      <p>Escribinos directamente a: <strong>contacto@hotelparaiso.com</strong></p>
      
      <form className="formulario" onSubmit={enviarMail}>
        <input type="text" placeholder="Nombre completo" required />
        <input type="email" placeholder="Correo electrónico" required />
        <textarea placeholder="Escribí tu consulta acá..." rows="4" required></textarea>
        <button type="submit">Enviar Mensaje</button>
      </form>

      {mensajeExito && (
        <div className="alerta-exito">
          ¡Mail enviado con éxito!
        </div>
      )}
    </div>
  );
}