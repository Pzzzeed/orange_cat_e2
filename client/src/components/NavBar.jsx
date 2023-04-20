import React from "react";
import '../assets/styles/NavBar.css'
const NavBar = () => {
  return(

    <nav className="nav">
     
<a className="site-title"><img id='nav-img' src="/head-logo.png"/>Orange Cat</a>

      
      
        <ul className="nav-middle">
          <li><a href="/">Feature</a></li>
          <li><a href="/">BMI</a></li>
          <li><a href="/">How It Work</a></li>
        </ul>
    
   
<ul className="nav-right">
<li><a href="/login">Sign in</a></li>
<li><a href="/register">Register</a></li>
</ul>
    </nav>
  )
};

export default NavBar;
