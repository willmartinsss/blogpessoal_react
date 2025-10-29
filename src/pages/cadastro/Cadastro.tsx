import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";

function Cadastro() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [confirmarSenha, setConfirmarSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate("/");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        alert("Usuário cadastrado com sucesso!");
      } catch (error) {
        alert("Erro ao cadastrar o usuário!");
      }
    } else {
      alert(
        "Dados do usuário inconsistentes! Verifique as informações do cadastro."
      );
      setUsuario({ ...usuario, senha: "" });
      setConfirmarSenha("");
    }

    setIsLoading(false);
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
        {/* Lado da imagem */}
        <div
          className="bg-[url('https://i.imgur.com/ZZFAmzo.jpg')] hidden lg:block bg-no-repeat 
                   bg-cover bg-center w-full min-h-screen"
        ></div>

        {/* Formulário */}
        <form
          className="bg-white shadow-xl rounded-2xl p-10 w-3/4 max-w-md flex-col gap-4"
          onSubmit={cadastrarNovoUsuario}
        >
          <h2 className="text-indigo-800 text-4xl text-center font-extrabold mb-2">
            Cadastrar
          </h2>

          <div className="flex flex-col w-full">
            <label htmlFor="nome" className="text-gray-700 font-semibold">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className="text-gray-700 font-semibold">
              Usuário
            </label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Digite seu usuário"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={usuario.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="foto" className="text-gray-700 font-semibold">
              Foto
            </label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="URL da foto"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={usuario.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="senha" className="text-gray-700 font-semibold">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Digite sua senha"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>

          <div className="flex flex-col w-full">
            <label
              htmlFor="confirmarSenha"
              className="text-gray-700 font-semibold"
            >
              Confirmar Senha
            </label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirme sua senha"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={confirmarSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleConfirmarSenha(e)
              }
            />
          </div>

          <div className="flex justify-between gap-4 mt-2">
            <button
              type="reset"
              className="w-1/2 py-2 rounded-lg text-white bg-red-500 hover:bg-red-600 transition font-semibold"
              onClick={retornar}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="w-1/2 py-2 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition font-semibold"
            >
              {isLoading ? (
                <ClipLoader color="#ffffff" size={24} />
              ) : (
                <span>Cadastrar</span>
              )}
            </button>
          </div>

          <p className="text-center text-sm text-gray-700 mt-4">
            Já tem uma conta?{" "}
            <Link
              to="/login"
              className="text-indigo-600 hover:underline font-semibold"
            >
              Logar-se
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Cadastro;
