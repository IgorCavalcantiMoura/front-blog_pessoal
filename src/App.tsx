
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './paginas/home/Home'
import Login from './paginas/login/Login'
import Footer from './componentes/footer/Footer'
import Navbar from './componentes/navbar/Navbar'
import Cadastro from './paginas/cadastro/Cadastro'
import { AuthProvider } from './contexts/AuthContext'
import ListaTemas from './componentes/temas/listaTemas/ListaTemas'
import FormularioTema from './componentes/temas/formularioTemas/FormularioTema'
import ListaPostagens from './componentes/postagens/listaPostagens/ListaPostagens'
import DeletarTema from './componentes/temas/deletarTema/DeletarTema'
import FormularioPostagem from './componentes/postagens/formularioPostagem/FormularioPostagem'
import DeletarPostagem from './componentes/postagens/deletarPostagem/DeletarPostagem'
import Perfil from './paginas/perfil/Perfil'
import { ToastContainer } from 'react-toastify'



function App() {
  return (
    <>
    <AuthProvider>
    <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}
export default App;