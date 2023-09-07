import {Link} from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import useAuthContext from "../hooks/useAuthContext"

const Navbar = ()=>{
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
      </div>
      <nav>
        {user && 
          <div>
            {user.email}
            <button onClick={handleClick}>Log out</button>
          </div>
        }
        {!user && 
          <div>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </div>
        }
      </nav>
    </header>
  )
}

export default Navbar