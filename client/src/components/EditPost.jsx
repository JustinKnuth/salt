import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"



export default function EditPost(props) {
  const [formData, setFormData] = useState({
      title: ''
  })
  const { title } = formData
  const { posts, handleEdit } = props
  const { id } = useParams()

  useEffect(() => {
    const prefillFormData = () => {
      const postItem = posts.find(post => post.id === Number(id))
      setFormData({
        title: postItem.title
      })
    }
    if (posts.length) {
      prefillFormData()
      
    }

  }, [posts])



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
      handleEdit(id, formData)
    }}>
      <h1>Edit Post</h1>
      <label>Title:
       <input
          type="text"
          name='title'
          value={title}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}