import React from "react"
import { Link } from "react-router-dom"


export default function AllBlogs(props) {
  const { posts, handleDelete, currentUser, comments } = props


  const reversePosts = [...posts].reverse()



  return (
    <div>

      {
        currentUser &&
        <>

          <p style={{ marginLeft: '20px' }}>Welcome back {currentUser.username}</p>

        </>
      }

      
      {reversePosts.map(post => (
        <div className='post-container' key={post.id}>

          <h2 className='post-title'>{post.title}</h2>
          <h3 className='post-author'>By {post.author}</h3>
          <p className='post-content'>
            {post.content.length < 400 ?
              post.content : post.content.slice(0, 400) + '......'}
          </p>
          <div className='link-buttons'>

            <Link className='full-post-link' to={`/posts/${post.id}`}>
              See the full post
          </Link>
              {post.created_at.slice(0,10)}
            {
              currentUser?.id === post.user_id &&
              <div>

                <Link className='edit-icon' to={`posts/${post.id}/edit`}>
                  <button className='edit-delete-buttons' type='submit'><i className="fas fa-edit"></i></button>
                </Link>
                <button className="edit-delete-buttons" onClick={() => handleDelete(post.id)}><i className="fas fa-trash"></i></button>
              </div>

            }
          </div>
          <br />
          <hr />

        </div>
      ))}


    </div>
  )
}