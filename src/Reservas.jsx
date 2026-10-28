import React from 'react';

export default function Reservas() {
  const habitaciones = [
    { id: 1, nombre: "Suite Presidencial", vista: "Vista al mar", precio: "$200/noche" },
    { id: 2, nombre: "Habitación Doble", vista: "Vista a la piscina", precio: "$120/noche" },
    { id: 3, nombre: "Habitación Simple", vista: "Vista al jardín", precio: "$80/noche" },
    { id: 4, nombre: "Suite Familiar", vista: "Vista panorámica", precio: "$150/noche" }
  ];

  return (
    <div className="section lugares">
      <h2>Nuestras Habitaciones</h2>
      <div className="grid-habitaciones">
        {habitaciones.map(hab => (
          <div key={hab.id} className="card-habitacion">
            <div className="img-placeholder">Imagen: {hab.nombre}</div>
            <h3>{hab.nombre}</h3>
            <p>{hab.vista}</p>
            <p className="precio">{hab.precio}</p>
            <button className="btn-reserva">Reservar</button>
          </div>
        ))}
      </div>
    </div>
  );
}