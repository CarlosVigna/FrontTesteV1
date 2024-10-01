import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import MenuHome from './componentes/MenuHome';
import Banner from './componentes/Banner';
import Footer from './componentes/Footer';
import CadastroUsuario from './pages/CadastroUsuario';
import Login from './pages/Login';
import Contas from './pages/Contas';
import BodyHome from './componentes/BodyHome';
import { useRef, useState, useEffect } from 'react'; 

function App() {
    const cadastroRef = useRef(null);
    const [mostrarCadastro, setMostrarCadastro] = useState(false); 
    const navigate = useNavigate(); 
    const location = useLocation(); 

    const scrollToCadastro = () => {
      if (location.pathname === '/home') {
        setMostrarCadastro(true); 
        setTimeout(() => {
          cadastroRef.current.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        navigate('/cadastro'); 
      }
    };

    
    useEffect(() => {
      if (location.pathname === '/home') {
        setMostrarCadastro(true);
      }
    }, [location.pathname]); 

  return (
    <div id="root">
      <MenuHome scrollToCadastro={scrollToCadastro} /> 
      <Banner /> 

      <main>
        <Routes>
          <Route path="/home" element={<BodyHome />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/contas" element={<Contas />} />
          <Route path="/cadastro" element={<CadastroUsuario />} /> 
        </Routes>

        
        {location.pathname === '/home' && mostrarCadastro && (
          <div ref={cadastroRef}>
            <CadastroUsuario />
          </div>
        )}
      
      </main>

      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
