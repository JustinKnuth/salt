import { Link } from "react-router-dom"



export default function Nav(props) {
  const { currentUser, handleLogout } = props


  return (
    <header>
      <a className='logo' href="/">
        <h1>Salt.</h1>

      </a>
      
      {
        currentUser ?
          <>
            <p>{currentUser.username}</p>
            <Link className='links' onClick={handleLogout}>Logout</Link>
          </>
          :
          <Link className='links' to="/login">Login/Register</Link>
        }


      {
        currentUser &&
        <>
          <Link className='links' to="/posts">All Blog Posts</Link>
         
          <Link className='links' to="/posts/new">
           Create a Post
          </Link>

        </>
      }
    </header>
  )
}