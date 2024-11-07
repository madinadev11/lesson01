import React from 'react'; 
import { Link } from 'react-router-dom'; 
 
const Header = () => { 
    return ( 
   <header> 
    <div className="container"> 
    <Link to="/"> 
        <h1>Home</h1> 
    </Link> 
    <Link to="/about"> 
        <h1>About</h1> 
    </Link> 
    <Link to="/contact"> 
        <h1>Contact</h1> 
    </Link> 
    </div> 
   </header> 
    ); 
}; 
 
export default Header;