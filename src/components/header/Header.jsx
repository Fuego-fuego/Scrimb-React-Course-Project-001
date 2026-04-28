import {Link} from "react-router-dom"
import ThemeSelector from "../theme-selector/ThemeSelector.jsx";

import "./header.css"
import logo from "../../../assets/react.svg"


const Header = () =>{
    return (
  <header className="primary-header">
  <div class="container">
    <div className="primary-header-content-wrapper | flex">
      {/* Logo */}
      <div className="logo-wrapper">
        <Link className="logo-link" to="/">
        <img src={logo} alt="company logo" className="primary-header-logo" />
        <p className=" logo-text | text-accent-blue-400 fw-bold">ReactFacts</p>
        </Link>
      </div>
      <ThemeSelector/>
    </div>
  </div>
</header>
)
}

export default Header 