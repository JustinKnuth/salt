import { useState } from "react"

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
    <center>
    <form onSubmit={(e) => {
      e.preventDefault()
      handleRegister(formData)
    }}>

      <h1>Register</h1>
      <label>Username <br/>
      <input
          className='create-inputs'
          type="text"
          name="username"
          value={username}
          onChange={handleChange} />
      </label> <br/>
      <br/>
        <label>Password (at least 6 characters) <br/>
       <input
          className='create-inputs'
          type="text"
          name="password"
          value={password}
          onChange={handleChange} />
      </label> <br/>
      <button>Submit</button> <br/>
    </form>
    </center>
  )
}
