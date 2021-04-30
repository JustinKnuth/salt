
import Nav from './Nav'
import AllBlogs from './AllBlogs'

export default function Home(props) {
  
  const { handleLogout, currentUser, posts, handleDelete } = props



  return (
    <div>
       <Nav
        currentUser={currentUser}
        handleLogout={handleLogout} />
      <hr />
      {/* <AllBlogs
          posts={posts}
          handleDelete={handleDelete}
          currentUser={currentUser} />
       */}
    </div>
  )
}