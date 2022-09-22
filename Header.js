import React from "react"
function Header(){
    return(
        <header>
                <img src="logo.jpeg" width="40px" height="40px" />
                <nav>
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
        </header>
      
    )
}
export default Header