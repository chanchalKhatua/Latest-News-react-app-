
import { Link } from "react-router-dom";
import "./Dropdown.css"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">News App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/general">Home</Link>
              </li>

              <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>

            </ul>


          </div>
          {/* <div className="dropdown">
  <button className="dropbtn">Dropdown</button>
  <div className="dropdown-content">
        <Link  className="nav-link" to="/business">Business</Link>
        <Link className="nav-link" to="/entertainment">Entertainment</Link>
        <Link className="nav-link" to="/general">General</Link>
        <Link className="nav-link" to="/health">Health</Link>
        <Link className="nav-link" to="/science">Science</Link>
        <Link className="nav-link" to="/sports">Sports</Link>
        <Link className="nav-link" to="/technology">Technology</Link>
  </div>
</div> */}

        </div>
      </nav>

    </div>
  )
}


export default Navbar