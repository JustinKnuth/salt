import { useState } from "react"
import { Link } from "react-router-dom"


export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData
  const {handleRegister} = props

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
      handleRegister(formData)
    }}>

      <h1>Register</h1>
      <label>
        Username:
      <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange} />
      </label>
      <br/>
      <label>
        Password:
       <input
          type="text"
          name="password"
          value={password}
          onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>

  )
}
