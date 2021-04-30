import React from "react"
import {Link} from "react-router-dom"


export default function AllBlogs(props) {
  const { posts, handleDelete, currentUser } = props


  const reversePosts = [...posts].reverse()


  return (
    <div>
      <h1 style= {{ textAlign: 'center' }}>Posts</h1>
      {reversePosts.map(post => (
        <div className='post-container' key={post.id}>

          <Link to={`/posts/${post.id}`}>
          </Link>
     
            <h2 className='post-title'>{post.title}</h2>
          <h3 className='post-author'>{post.author}</h3>
          <p className='post-content'>
          {post.content.length < 300 ?
            post.content : post.content = post.content.slice(0,300) + '......' }

          </p>

          {/* <p className='post-content'>{post.content}</p> */}
          

          {
            currentUser?.id === post.user_id &&
            <>
            <Link to={`posts/${post.id}/edit`}>
            <button>edit</button>
            </Link>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
            
            </>
            
          }
        </div>
      ))}

          
    </div>
  )
}