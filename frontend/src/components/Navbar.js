import {Link} from "react-router-dom"

const Navbar = () =>{
  return(
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          <div>
            <Link to="/signup">
              <span>Signup</span>
            </Link>
            <Link to="/login">
              <span>Login</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar