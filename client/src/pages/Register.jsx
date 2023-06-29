import React, { useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import axios from 'axios'


const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [err, setError] = useState(null)
  const navigate = useNavigate()


  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post("/auth/register", inputs)
      navigate("/login")
    } catch (err) {
      setError(err.response.data)
    }
  }

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='Username' onChange={handleChange} name="username" />
        <input required type="email" placeholder='email' onChange={handleChange} name="email" />
        <input required type="password" placeholder='Password' onChange={handleChange} name="password" />
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>Do you have an account? <Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register