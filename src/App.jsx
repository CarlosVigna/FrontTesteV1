import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuHome from './componentes/MenuHome';
import Banner from './componentes/Banner';
import Footer from './componentes/Footer';
import CadastroUsuario from './pages/CadastroUsuario';
import Login from './pages/Login';
import Contas from './pages/Contas';
import BodyHome from './componentes/BodyHome';


function App() {
  return (
    <div id="root">
      <Router>

      <MenuHome />
      <Banner /> 
        
        
        

        
        <main>
          <Routes>
            <Route path="/home" element={<BodyHome />} /> 
            <Route path="/cadastro" element={<CadastroUsuario />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contas" element={<Contas />} />

          </Routes>
        </main>

       
        <Footer />
      </Router>
    </div>
  );
}

export default App;
