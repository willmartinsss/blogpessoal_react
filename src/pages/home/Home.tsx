import React from "react";
import ListaPostagens from "../../components/postagem/listapostagens/ListaPostagem";
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem";

function Home() {
  return (
    <>
      <div className="bg-indigo-600 min-h-screen flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5x1 font-bold">Seja bem vindx!</h2>
            <p className="text-xl">Expresse aqui seus pensamentos e opinioes</p>

            <div className="flex justify-around gap-4">
              <ModalPostagem />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img
              src="https://i.imgur.com/fyfri1v.png"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;
