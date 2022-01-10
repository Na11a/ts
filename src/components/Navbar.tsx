import React from "react"
export const Navbar:React.FC = () =>{
    return(
        <nav>
        <div className="nav-wrapper purple darken2">
          <a href="/" className="brand-logo">React + Typescript</a>
          <ul className="right ">
            <li><a href="/">ToDo list</a></li>
            <li><a href="/">Information</a></li>
          </ul>
        </div>
      </nav>
    )
} 