import React from "react"
import { Link } from "react-router-dom"


export default function AllBlogs(props) {
  const { posts, handleDelete, currentUser } = props


  const reversePosts = [...posts].reverse()


  return (
    <div>

{
        currentUser &&
        <>
          {/* <Link className='links' to="/posts">All Blog Posts</Link> */}
          <p>Welcome back {currentUser.username}</p>

        </>
      }

      <h1 style={{ textAlign: 'center', color: ' #B4FF79' }}>Posts</h1>
      {reversePosts.map(post => (
        <div className='post-container' key={post.id}>

          <Link to={`/posts/${post.id}`}>
          </Link>

          <h2 className='post-title'>{post.title}</h2>
          <h3 className='post-author'>{post.author}</h3>
          <p className='post-content'>
            {post.content.length < 300 ?
              post.content : post.content = post.content.slice(0, 300) + '......'}
          </p>
          <Link to={`/posts/${post.id}`}>
          {post.content.length < 300 ?
            '' : 'Click Here' }
          </Link><br/>
          {/* <p className='post-content'>{post.content}</p> */}


          {
            currentUser?.id === post.user_id &&
            <>
              <Link to={`posts/${post.id}/edit`}>
                <button>edit</button>
              </Link>
              <div onClick={() => handleDelete(post.id)}><i className="fas fa-trash"></i></div>

            </>

          }<br />

        </div>
      ))}


    </div>
  )
}