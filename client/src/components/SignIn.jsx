import { useState } from "react"
import { Link } from "react-router-dom"


export default function SignIn(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData
  const {handleLogin} = props

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
      handleLogin(formData)
    }}>

      <h1 style = {{ color: " #B4FF79" }}>Login</h1> 
      <label>Username <br/>
      <input
          className="create-inputs"
          type="text"
          name="username"
          value={username}
          onChange={handleChange} />
      </label> <br/>
      
      <label>Password <br/>
       <input
          className="create-inputs"
          type="text"
          name="password"
          value={password}
          onChange={handleChange} />
      </label> <br/>
        <button>Submit</button> <br/><br/>
        Not a member?<br/><br/>
      <Link style={{ color: '#FE30A5' }} to='/register'>Click here to register</Link>
      
    </form>
    </center>

  )
}
