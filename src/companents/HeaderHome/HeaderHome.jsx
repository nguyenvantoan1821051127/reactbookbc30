//rfc
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HeaderHome() {
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="#">Hook</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Home <span className="visually-hidden">(current)</span></NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/antd">antd demo</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/detail">Detial</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hooks</NavLink>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <NavLink className="dropdown-item" to="/usestate">UseState</NavLink>
                            <NavLink className="dropdown-item" to="/useeffect">Usereffect</NavLink>
                            <NavLink className="dropdown-item" to="/usecallback">usecallback</NavLink>
                            <NavLink className="dropdown-item" to="/usememodemo">usememodemo</NavLink>
                            <NavLink className="dropdown-item" to="/useref">userefdemo</NavLink>
                            <NavLink className="dropdown-item" to="/useredux">demo redux (number)</NavLink>
                            <NavLink className="dropdown-item" to="/demofacebook">demo facebook</NavLink>
                            <NavLink className="dropdown-item" to="/search">search</NavLink>
                            <NavLink className="dropdown-item" to="/customhook">demouseRoute</NavLink>
                        </div>
                    </li>
                </ul>
            <form className="d-flex my-2 my-lg-0">
                <input className="form-control me-sm-2" type="text" placeholder="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            </div>
        </nav>
    </div>
  )
}
