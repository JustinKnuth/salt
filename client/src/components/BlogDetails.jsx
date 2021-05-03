import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getOnePost } from "../services/posts"
import { createComment } from "../services/comments"



export default function BlogDetails(props) {
  const [postItem, setPostItem] = useState(null)
  const { id } = useParams()
  const { currentUser } = props
  const [formData, setFormData] = useState({
    author: currentUser?.username,
    content: '',
    user_id: '',
    post_id: Number(id)
  })
  const [reload, setReload] = useState(false)

  const { author, content } = formData

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await getOnePost(id)
      setPostItem(postData)
    }
    window.scrollTo(0, 0)
    fetchPost()
  }, [reload, id])


  const handleCreateComment = async (formData) => {
    formData.user_id = currentUser.id
    await createComment(formData);
    setReload(!reload)
    setFormData({
      author: '',
      content: '',
      user_id: '',
      post_id: Number(id)
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div>
      <center>
        <h1 style={{fontSize:'40px'}}>{postItem?.title}</h1>
        <h2>By {postItem?.author}</h2>
        <p style={{ margin: '20px' }}>{postItem?.content}</p>

      </center>

      {
        currentUser ?
          <>
            <center>
              <form className="create-form" onSubmit={(e) => {
                e.preventDefault()
                handleCreateComment(formData)
              }}>



                <h2 style={{ textAlign: 'center', color: '#B4FF79', marginTop: '70px' }}>Leave a Comment</h2>
                <br />
                <label> <br />
                  <input
                    className='create-inputs'
                    type="text"
                    placeholder="Whats your name?"
                    name='author'
                    value={author}
                    onChange={handleChange}
                  /> <br />
                </label>
                <label> <br />
                  <textarea
                    className='create-textarea-comments'
                    placeholder="What are your thoughts?"
                    type="text"
                    name='content'
                    value={content}
                    onChange={handleChange}
                  />
                </label> <br />

                <button>Submit</button>
              </form>
            </center>
          </>
          :
          ''
        }
      <center>
        {
          postItem?.comments.map((comment) => (
            <div className='comments'>
              <h3>{comment.author}</h3>
              <p key={comment.id}>{comment.content}</p>

            </div>
          ))
        }

      </center>
    </div>
  )
}