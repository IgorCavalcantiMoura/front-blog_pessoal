import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { BookmarksSimple, Note, PlusCircle, SignOut, User } from '@phosphor-icons/react'
import { toastAlerta } from '../../util/toastAlerta'



function Navbar() {
  const navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      toastAlerta('Usuário deslogado com sucesso', 'sucesso')
      navigate('/login')
  }

  let navbarComponent
  if(usuario.token){
    navbarComponent = (
      <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Blog Pessoal</Link>

            <div className='flex gap-4'>
            <Link to='/postagens' className='hover:scale-110 flex items-center gap-1'><Note size={16} />Postagens</Link>
            <Link to='/temas' className='hover:scale-110 flex items-center gap-1'><BookmarksSimple size={16} />Temas</Link>
            <Link to='/cadastroTema' className='hover:scale-110 flex items-center gap-1'><PlusCircle size={16} />Novo tema</Link>
              <Link to='/perfil' className='hover:scale-110 flex items-center gap-1'><User size={16} />Perfil</Link>
              <Link to='' onClick={logout} className='hover:scale-110 flex items-center gap-1'><SignOut size={16} />Sair</Link>
             
            </div>
          </div>
        </div>
    )
  }
  

  return (
    <>
     {navbarComponent}
    </>
  )
}

export default Navbar