import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { BookmarksSimple, Note, PencilSimple, SignOut, User } from '@phosphor-icons/react'



function Navbar() {
  const navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      alert('Usuário deslogado com sucesso')
      navigate('/login')
  }

  let navbarComponent
  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Blog Pessoal</Link>

            <div className='flex gap-4'>
            <Link to='/postagens' className='hover:underline flex items-center gap-1'><Note size={16} />Postagens</Link>
            <Link to='/temas' className='hover:underline flex items-center gap-1'><BookmarksSimple size={16} />Temas</Link>
            <Link to='/cadastroTema' className='hover:underline flex items-center gap-1'><PencilSimple size={16} />Cadastrar tema</Link>
              <div className='hover:underline flex items-center gap-1'><User size={16} />Perfil</div>
              <Link to='' onClick={logout} className='hover:underline flex items-center gap-1'><SignOut size={16} />Sair</Link>
             
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar