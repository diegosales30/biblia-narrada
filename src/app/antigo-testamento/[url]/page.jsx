"use client";
//import { antigoTestamento } from "@/db/database";

import React, { useState } from 'react';

function Capitulos({ livro }) {
  const [src, setSrc] = useState(null);

  const handleCapituloClick = (capitulo) => {
    setSrc(capitulo.src);
  };

  return (
    <div>
      <h2>{livro.livro}</h2>
      {livro.capitulos.map((capitulo) => (
        <button key={capitulo.id} onClick={() => handleCapituloClick(capitulo)}>
          {capitulo.title}
        </button>
      ))}
      {src && (
        <div>
          <iframe
            width="560"
            height="315"
            src={src}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Vídeo"
          />
        </div>
      )}
      <button onClick={() => setSrc(null)}>Voltar</button>
    </div>
  );
}

export default Capitulos;
