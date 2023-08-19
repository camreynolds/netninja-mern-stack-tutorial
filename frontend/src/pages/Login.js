import { useState } from "react"

const Login = () =>{
  const [email, setEmail]= useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const handleSubmit = async (e)=>{
    e.preventDefault()

    const user = {email,password}

    const response = await fetch("/api/users",{
      method: "POST",
      body: JSON.stringify(user),
      headers:{
        "Content-Type": "application/json"
      }
    })

    const json = await response.json()

    if(!response.ok){
      setError(json.error)
    }

    if(response.ok){
      setError(null)
      setEmail("")
      setPassword("")
    }
  }

  return(
    <form className="login" onSubmit={handleSubmit}>
      <h3>Login</h3>

      <label>Email:</label>
      <input
        type="email"
        onChange={ e => setEmail(e.target.value)}
        value={email}
      />

      <label>Password:</label>
      <input
        type="password"
        onChange={ e => setPassword(e.target.value)}
        value={password}
      />

      <button>login</button>
      { error && <div className="error">{error}</div> }
    </form>
  )
}

export default Login