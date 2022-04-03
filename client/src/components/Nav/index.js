import React, { useState } from "react";
import Auth from "../../utils/auth";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

function Nav() {

  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    const body = document.getElementById("body");
    setMenuOpen(!menuOpen); 

    body.classList.toggle("fixed-body"); 
  }


  function showNavLinks() {
    return (
   
      <ul className={`${menuOpen ? "flex-column" : "flex-row"}`}>
        <li className="mx-3">
          <NavLink exact to="/" activeClassName="active" >
            Home
          </NavLink>
        </li>
        <li className="mx-3">
          <NavLink to="/furnitures" activeClassName="active" >
            Furnitures
          </NavLink>
        </li>
        <li className="mx-3">
          <NavLink to="/equipments" activeClassName="active" >
            Equipments
          </NavLink>
        </li>
        <li className="mx-3">
          <NavLink to="/about" activeClassName="active" >
            About
          </NavLink>
        </li>
        
        <li className="mx-4">
          <NavLink to="/howitworks" activeClassName="active" >
            How It Works
          </NavLink>
          </li>
          <li className="mx-4">
          <NavLink to="/add" activeClassName="active" >
            Add Items
          </NavLink>
        </li>
      </ul>
    )
  }


  function showNavAuth() {
    if (Auth.loggedIn()) {
      return (
        <ul className={`${menuOpen ? "flex-column" : "flex-row"}`}>
          <li className="mx-3">
            <NavLink to="/orderHistory" activeClassName="active" >
              Order History
            </NavLink>
          </li>
          <li className="mx-3">
    
            <a href="/" onClick={
              function () {
                toggleMenu();
                Auth.logout()
              } 
              }>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className={`${menuOpen ? "flex-column" : "flex-row"}`}>
          <li className="mx-3">
            <Link to="/signup" >
              Signup
            </Link>
          </li>
          <li className="mx-3">
            <Link to="/login" >
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  
  
  const NavHamburger = ({ menuOpen }) => (
   <AiOutlineMenu className="nav-hamburger" style={{fill:"#ffffff"}} size={26}/>
  );

 
  const NavBar = ({ menuOpen, setMenuOpen }) => {
    return (
      <nav className="flex-row px-2 hidden">
         <button style={{backgroundColor:"transparent", position:"absolute", top:"0", zIndex:"999"}} type="button" aria-label="Toggle mobile menu" onClick={toggleMenu} className="hidden-mobile"><NavHamburger menuOpen={menuOpen} /></button>
        
        <div className="flex-row space-between display-none">
            {showNavLinks()}
          <div className="flex-row nav-auth-links">
            {showNavAuth()}
          </div>
        </div>
      </nav>
    )
  }



  return (
    <header>
     <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    
    </header>
  );
}

export default Nav;
