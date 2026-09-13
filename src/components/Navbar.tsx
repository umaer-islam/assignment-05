import logo from "../assets/logo-text.png"

function Navbar() {
  return (
    <nav className="navbar">

      <button className="menu-button">☰</button>

      <div className="navbar-logo">
        <img src={logo} alt="Dev Stack" />
      </div>
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">Technologies</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <div className="navbar-actions">
        <a href="#">Sign In</a>
        <a href="#" className="signup-button">Sign Up</a>
      </div>
    </nav>
  )
}

export default Navbar