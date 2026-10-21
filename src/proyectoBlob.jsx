import React, { useState } from 'react';

export default function ProyectoBlob() {
  let tp = "TP BLOB REACT";
  let [resultado, setResultado] = useState("");
  let [archivoBlob, setArchivoBlob] = useState(null);

  const crearBlob = () => {
    const texto = "texto del blob largo largo";
    const nuevoBlob = new Blob([texto], { type: 'text/plain' });
    setArchivoBlob(nuevoBlob);
    setResultado("Blob creado correctamente");
  };

  const descargarBlob = () => {
    if (!archivoBlob) {
      setResultado("Primero debés crear el Blob");
      return;
    }
    const url = URL.createObjectURL(archivoBlob);
    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.download = "archivo.txt";
    enlace.click();
    URL.revokeObjectURL(url);
  };

  const usarSlice = () => {
    if (!archivoBlob) {
      setResultado("Primero debés crear el Blob");
      return;
    }
    const blobRecortado = archivoBlob.slice(0, 10, 'text/plain');
    const url = URL.createObjectURL(blobRecortado);
    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.download = "recorte.txt";
    enlace.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="seccion">
      <h1>{tp}</h1>
      <div style={{ marginTop: "20px" }}>
        <button onClick={crearBlob}>Crear Blob de texto</button>
        <button onClick={descargarBlob}>Descargar Blob</button>
        <button onClick={usarSlice}>Usar slice()</button>
      </div>
      <p className="resultado">{resultado}</p>
    </div>
  );
}