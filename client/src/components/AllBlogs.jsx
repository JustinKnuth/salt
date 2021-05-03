import React from "react"
import { Link } from "react-router-dom"


export default function AllBlogs(props) {
  const { posts, comments, handleDelete, currentUser } = props


  const reversePosts = [...posts].reverse()


  return (
    <div>

      {
        currentUser &&
        <>

          <p style={{ marginLeft: '20px' }}>Welcome back {currentUser.username}</p>

        </>
      }

      <h1 style={{ textAlign: 'center', color: ' #B4FF79' }}>Posts</h1>
      {reversePosts.map(post => (
        <div className='post-container' key={post.id}>

          <Link to={`/posts/${post.id}`}>click
          </Link>

          <h2 className='post-title'>{post.title}</h2>
          <h3 className='post-author'>{post.author}</h3>
          <p className='post-content'>
            {post.content.length < 300 ?
              post.content : post.content.slice(0, 300) + '......'}
          </p>
          <Link to={`/posts/${post.id}`}>
            {post.content.length < 300 ?
              '' : 'Click Here'}
          </Link><br />
          {/* <p>{post.comments}</p> */}
          
          
        
      
          {/* <p className='post-content'>{post.content}</p> */}


          {
            currentUser?.id === post.user_id &&
            <>
              <Link to={`posts/${post.id}/edit`}>
                <button className='edit-delete-buttons' type='submit'><i className="fas fa-edit"></i></button>
              </Link>
              <button className="edit-delete-buttons" onClick={() => handleDelete(post.id)}><i className="fas fa-trash"></i></button>

            </>

          }<br />

        </div>
      ))}


    </div>
  )
}