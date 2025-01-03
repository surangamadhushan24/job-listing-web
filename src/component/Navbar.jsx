import React from 'react'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <a className="navbar-brand" href="#">Jobs</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Jobs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Add Jobs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />

                </form>
            </nav>
        </>
    )
}

export default Navbar