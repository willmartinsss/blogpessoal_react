import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h[80vh]">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
