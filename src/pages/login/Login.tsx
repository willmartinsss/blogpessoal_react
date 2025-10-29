import {
  useContext,
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../contexts/AuthContext";
import type UsuarioLogin from "../../models/UsuarioLogin";

function Login() {
  const navigate = useNavigate();

  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
      {/* Formulário de Login */}
      <form
        className="flex flex-col justify-center items-center w-3/4 lg:w-1/2 gap-4"
        onSubmit={login}
      >
        <h2 className="text-slate-900 text-5xl font-extrabold">Entrar</h2>

        {/* Campo Usuário */}
        <div className="flex flex-col w-full">
          <label htmlFor="usuario" className="text-slate-800 mb-1">
            Usuário
          </label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="Digite seu usuário"
            className="border-2 border-slate-700 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={usuarioLogin.usuario}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        {/* Campo Senha */}
        <div className="flex flex-col w-full">
          <label htmlFor="senha" className="text-slate-800 mb-1">
            Senha
          </label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
            className="border-2 border-slate-700 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={usuarioLogin.senha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        {/* Botão Entrar */}
        <button
          type="submit"
          className="rounded bg-indigo-500 hover:bg-indigo-700 transition-colors duration-200 text-white w-1/2 py-2"
        >
          {isLoading ?
            <ClipLoader
              color="#ffffff"
              size={24}
            /> :
            <span> Entrar</span>
          }
        </button>

        {/* Separador */}
        <hr className="border-slate-800 w-full my-4" />

        {/* Link de Cadastro */}
        <p className="text-center">
          Ainda não tem uma conta?{" "}
          <Link to="/cadastro" className="text-indigo-700 hover:underline">
            Cadastre-se
          </Link>
        </p>
      </form>

      {/* Imagem lateral */}
      <div
        className="hidden lg:block bg-[url('https://i.imgur.com/ZZFAmzo.jpg')] bg-no-repeat bg-cover bg-center w-full h-full"
        aria-hidden="true"
      ></div>
    </div>
  );
}

export default Login;
