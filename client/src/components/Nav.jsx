import { Link } from "react-router-dom"



export default function Nav(props) {
  const { currentUser, handleLogout } = props


  return (
    <header>
      <h1>Salt.</h1>
      {
        currentUser ?
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
          :
          <Link to="/login">Login/Register</Link>
        }


      {
        currentUser &&
        <>
          <Link to="/posts">All Blog Posts</Link>
         
          <Link to="/posts/new">
           Create a Post
          </Link>

        </>
      }
    </header>
  )
}