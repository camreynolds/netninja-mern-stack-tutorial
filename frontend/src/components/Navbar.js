import {Link} from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import useAuthContext from "../hooks/useAuthContext"

const Navbar = () =>{
  const {logout} = useLogout()
  const {user} = useAuthContext()

  const handleClick = ()=>{
    logout()
  }

  return(
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          {user && (
            <div>
              {user.email}
              <button onClick={handleClick}>logout</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/signup">
                <span>Signup</span>
              </Link>
              <Link to="/login">
                <span>Login</span>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar