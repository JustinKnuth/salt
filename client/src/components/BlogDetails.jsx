import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getOnePost } from "../services/posts"
import { getAllComments, createComment } from "../services/comments"



export default function BlogDetails(props) {
  const [postItem, setPostItem] = useState(null)
  const [comments, setComments] = useState([])
  const { id } = useParams()
  const { currentUser } = props
  const [formData, setFormData] = useState({
    author: '',
    content: '',
    user_id: '',
    post_id: Number(id)
  })

  //console.log(currentUser.id)
  
  const { author, content } = formData

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await getOnePost(id)
      setPostItem(postData)
    }
    fetchPost()
  }, [])
  


  useEffect(() => {
    const fetchComments = async () => {
      const commentData = await getAllComments()
      setComments(commentData)
    }
    fetchComments()
  }, [])

  const handleCreateComment = async (formData) => {
    formData.user_id = currentUser.id
    const commentData = await createComment(formData);
    //setComments(commentData)
    setComments(prevState => [...prevState, commentData])
    // history.push('/posts')
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
      <h1>{postItem?.title}</h1>
      <h2>{postItem?.author}</h2>
      <p>{postItem?.content}</p>

      </center>

      
          <>
            <center>
              <form className="create-form" onSubmit={(e) => {
                e.preventDefault()
                handleCreateComment(formData)
              }}>
                


                <h2 style={{ textAlign: 'center', color: '#B4FF79' }}>Leave a Comment</h2>
                <br />
                <label> <br />
                  <textarea
                    className='create-textarea-comments'
                    placeholder="What are your thoughts?"
                    type="text"
                    name='author'
                    value={author}
                    onChange={handleChange}
                  />
                  
                </label> <br />
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
          
      
      
      {
        postItem?.comments.map((comment) => (
          <p key={comment.id}>{comment.content}</p>
        ))
      }
    </div>
  )
}