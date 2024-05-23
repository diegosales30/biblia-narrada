"use client";
import { antigoTestamento } from "@/db/database";
import { useState } from "react";
import Capitulos from "./[url]/page";


const AntigoTestamento = () => {
  console.log(antigoTestamento);
  const [livroSelecionado, setLivroSelecionado] = useState(null);

  const handleLivroClick = (livro) => {
    setLivroSelecionado(livro);
  };
  return (

    <div>
      {livroSelecionado ? (
        <Capitulos livro={livroSelecionado} />
      ) : (
        antigoTestamento.map((livro, index) => (
          <button key={index} onClick={() => handleLivroClick(livro)}>
            {livro.livro}
          </button>
        ))
      )}
    </div>

  //  <div>
  //   <h1>Antigo Testamento</h1>
  //   {antigoTestamento.map((livro, index) => (
  //       <div key={index} >
  //         <h2>{livro.livro}</h2>
            
  //         {/* <ul>
  //           {livro.capitulos.map((capitulo) => (
  //             <li key={capitulo.id}>
  //               <a href={capitulo.url}>{capitulo.title}</a>
  //             </li>
  //           ))}
  //         </ul> */}
  //       </div>
  //     ))}
  //  </div>
  );
};
export default AntigoTestamento;
