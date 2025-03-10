import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">DailyDigest</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link onClick={()=>{props.setCategory('ALL')}} className="nav-link active" to="/news">News</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link active dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </Link>
          <ul className="dropdown-menu">
            <li><Link onClick={()=>{props.setCategory('POLITICS')}} className="dropdown-item" to="/politics">Politics</Link></li>
            <li><Link onClick={()=>{props.setCategory('CINEMA')}} className="dropdown-item" to="/cinema">Cinema</Link></li>
            <li><Link onClick={()=>{props.setCategory('EDUCATION')}} className="dropdown-item" to="/education">Education</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-disabled="true" to="/about">About</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
