import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Perfil() {
  const navigate = useNavigate();
  const { usuario } = useContext(AuthContext);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (usuario.token === "") {
			ToastAlerta("Você precisa estar logado", "info");
      navigate("/");
    }
  }, [usuario.token, navigate]);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="flex justify-center mx-4">
      <div className="container mx-auto my-4 rounded-2xl overflow-hidden shadow-2xl">
        {/* Banner */}
        <div className="relative">
          <img
            className="w-full h-72 object-cover"
            src="https://i.imgur.com/ZZFAmzo.jpg"
            alt="Capa do Perfil"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
        </div>

        {/* Conteúdo */}
        <div className="relative px-6 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-5 -mt-24 relative z-10">
            {/* Foto */}
            <div>
              <img
                className="rounded-full w-40 h-40 border-4 border-white shadow-xl object-cover hover:scale-105 transition-transform duration-300"
                src={
                  imageError ? "https://via.placeholder.com/160" : usuario.foto
                }
                alt={`Foto de perfil de ${usuario.nome}`}
                onError={handleImageError}
              />
            </div>

            {/* Informações */}
            <div className="mt-6 sm:mt-0 sm:pb-4 flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-1">
                {usuario.nome}
              </h1>
              <p className="text-gray-600 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>{usuario.usuario}</span>
              </p>
            </div>
          </div>

          {/* Cards de informações */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-linear-to-br from-sky-500 to-blue-600 rounded-lg p-6 text-white shadow-lg">
              <h3 className="text-sm font-medium opacity-90 mb-2">
                Nome Completo
              </h3>
              <p className="text-xl font-semibold">{usuario.nome}</p>
            </div>

            <div className="bg-linear-to-br from-purple-500 to-pink-600 rounded-lg p-6 text-white shadow-lg">
              <h3 className="text-sm font-medium opacity-90 mb-2">Email</h3>
              <p className="text-xl font-semibold break-all">
                {usuario.usuario}
              </p>
            </div>

            <div className="bg-linear-to-br from-green-500 to-teal-600 rounded-lg p-6 text-white shadow-lg">
              <h3 className="text-sm font-medium opacity-90 mb-2">Status</h3>
              <p className="text-xl font-semibold flex items-center gap-2">
                <span className="w-3 h-3 bg-white rounded-full animate-pulse" />
                Ativo
              </p>
            </div>
          </div>

          {/* Botões */}
          <div className="mt-8 flex gap-4">
            <button
              className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg 
             font-medium transition-colors duration-200 focus:outline-none 
             focus:ring-4 focus:ring-sky-300 shadow-md"
              onClick={() => navigate("/editar-perfil")}
              aria-label="Editar perfil"
            >
              Editar Perfil
            </button>

            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 rounded-lg font-medium transition-colors duration-200 shadow-md"
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
