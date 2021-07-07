import React, { useRef, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllPosts } from "../services/posts";


export default function AllBlogs(props) {
  const { posts, setPosts, page, setPage, handleDelete, currentUser } = props
  const [newPosts, setNewPosts] = useState([])
  const loader = useRef(null);

  // const reversePosts = [...posts].reverse()

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current)
    }

  }, []);


  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await getAllPosts(page)
      setNewPosts(postData)
    }
    fetchPosts()
  }, [page])

  useEffect(() => {
    const newList = posts.concat([...newPosts]);
    setPosts(newList)
  }, [page])


  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((page) => page + 1)
    }
  }


  return (
    <div>

      {
        currentUser &&
        <>

          <p style={{ marginLeft: '20px' }}>Welcome back {currentUser.username}</p>

        </>
      }


      {posts.map(post => (
        <div className='post-container' key={post.id}>

          <h2 className='post-title'>{post.title}</h2>
          <h3 className='post-author'>By {post.author}</h3>
          {post.created_at.slice(0, 10)}
          <p className='post-content'>
            {post.content.length < 400 ?
              post.content : post.content.slice(0, 400) + '......'}
          </p>
          <div className='link-buttons'>

            <Link className='full-post-link' to={`/posts/${post.id}`}>
              See the full post
          </Link>

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

      <div className="loading" ref={loader} />




    </div>
  )
}