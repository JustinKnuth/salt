import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"



export default function CreatePost(props) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
    
  })
  const { title, author, content } = formData
 const { handleCreate } = props





  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }


  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleCreate(formData)
    }}>
      <h1>Create Post</h1>
      <label>Title:
       <input
          type="text"
          name='title'
          value={title}
          onChange={handleChange}
        />
      </label>
      <label>author:
       <input
          type="text"
          name='author'
          value={author}
          onChange={handleChange}
        />
      </label>
      <label>content:
       <input
          type="text"
          name='content'
          value={content}
          onChange={handleChange}
        />
      </label>
      
      <button>Submit</button>
    </form>
  )
}