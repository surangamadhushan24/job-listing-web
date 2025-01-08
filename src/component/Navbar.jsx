import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
   
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <NavLink className="navbar-brand" href="#">Jobs</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/add-jobs">Add Jobs</NavLink>
                        </li>
                       
                    </ul>
                </div>
              
            </nav>
        </>
    )
}

export default Navbar