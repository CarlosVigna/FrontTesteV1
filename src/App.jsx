import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuHome from './componentes/MenuHome';
import Painel from './componentes/Painel'
import Footer from './componentes/Footer'
import CadastroUsuario from './pages/CadastroUsuario';
import Login from './pages/Login';



function App() {

  return (
    <div id="root">

      <Router>
        <Home />
        <MenuHome />
        <main>
          <Routes>
            <Route path="/home" element={<Painel />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>

  )
}

export default App