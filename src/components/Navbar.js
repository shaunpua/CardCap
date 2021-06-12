import React, {useState} from 'react'
import { IoMenu, IoSearch, IoClose} from "react-icons/io5";



function Navbar() {

    const [showLinks, setShowLinks] = useState(false);
    const [sideBar, setSideBar] = useState(false);
    return (
        <div className="nav">
            
            <div className="nav__left">
                <img className="nav__logo"src={process.env.PUBLIC_URL + 'logo.png'} /> 
                <h2 className="nav__title">CardCap</h2>
                <div className="nav__links" id={showLinks ? "hidden": ""}>
                    <a href="">Home</a>
                    <a href="">Rankings</a>
                    <a href="">Browse</a>
                    <a href="">About</a>
                </div>
            </div>
            <div className="nav__right">
                
                <div className="search">
                    
                    <input type="text" placeholder="Search for a card" className="search__input" />
                    <IoSearch className="search__icon" size="20px" />
                </div>
                  
                <button className="nav__search"><IoSearch className="icon__nav" size="30px" /></button>

                <button className="nav__menu" onClick={() => setShowLinks(!showLinks)} >
                    {showLinks || <IoMenu className="icon__nav" size="30px" />}
                    {showLinks && <IoClose className="icon__nav" size="30px" />}
                    </button> 

            </div>
            
        </div>
    )
}

export default Navbar
