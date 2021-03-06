import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"



export default function EditPost(props) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content:''
  })
  const { title, author, content } = formData
  const { posts, handleEdit } = props
  const { id } = useParams()

  useEffect(() => {
    const prefillFormData = () => {
      const postItem = posts.find(post => post.id === Number(id))
      setFormData({
        title: postItem.title,
        author: postItem.author,
        content: postItem.content
      })
    }
    if (posts.length) {
      prefillFormData()
      
    }

  }, [posts, id])



  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }


  return (
    <center>
    <form className="create-form" onSubmit={(e) => {
      e.preventDefault()
      handleEdit(id, formData)
    }}>
      <h1 style={{ textAlign: 'center', color: '#B4FF79' }}>Edit Post</h1> 
      <label>Title <br/>
       <input
          className='create-inputs'
          type="text"
          name='title'
          value={title}
          onChange={handleChange}
        />
      </label> <br/>
      <label>Author <br/>
       <input
          className='create-inputs'
          type="text"
          name='author'
          value={author}
          onChange={handleChange}
        /> <br/>
      </label> <br/>
      <label>Content <br/>
       <textarea
          className='create-textarea'
          type="text"
          name='content'
          value={content}
          onChange={handleChange}
        />
      </label> <br/>
      <button>Submit</button>
      </form>
      </center>
  )
}