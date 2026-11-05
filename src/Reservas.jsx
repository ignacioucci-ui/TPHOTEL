import React, { useState } from 'react';

export default function Reservas() {
  const [reservaActiva, setReservaActiva] = useState(null);

  const habitaciones = [
    { 
      id: 1, 
      nombre: "Suite Presidencial", 
      vista: "Vista al mar", 
      precio: "$200/noche", 
      imagen: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&q=80" 
    },
    { 
      id: 2, 
      nombre: "Habitación Doble", 
      vista: "Vista a la piscina", 
      precio: "$120/noche", 
      imagen: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&q=80" 
    },
    { 
      id: 3, 
      nombre: "Habitación Simple", 
      vista: "Vista al jardín", 
      precio: "$80/noche", 
      imagen: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500&q=80" 
    },
    { 
      id: 4, 
      nombre: "Suite Familiar", 
      vista: "Vista panorámica", 
      precio: "$150/noche", 
      imagen: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&q=80" 
    }
  ];

  return (
    <div className="section lugares">
      <h2>Nuestras Habitaciones</h2>
      
      <div className="grid-habitaciones">
        {habitaciones.map(hab => (
          <div key={hab.id} className="card-habitacion">
            <img src={hab.imagen} alt={hab.nombre} className="img-habitacion" />
            <h3>{hab.nombre}</h3>
            <p>{hab.vista}</p>
            <p className="precio">{hab.precio}</p>
            <button className="btn-reserva" onClick={() => setReservaActiva(hab)}>
              Reservar
            </button>
          </div>
        ))}
      </div>

      {/* Ventana emergente del calendario */}
      {reservaActiva && (
        <div className="modal-overlay">
          <div className="modal-contenido">
            <h3>Reservar {reservaActiva.nombre}</h3>
            
            <label>Fecha de ingreso:</label>
            <input type="date" className="input-fecha" />
            
            <label>Fecha de salida:</label>
            <input type="date" className="input-fecha" />
            
            <div className="modal-botones">
              <button className="btn-confirmar" onClick={() => {
                alert("¡Reserva confirmada con éxito!");
                setReservaActiva(null);
              }}>Confirmar</button>
              
              <button className="btn-cancelar" onClick={() => setReservaActiva(null)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    );
}