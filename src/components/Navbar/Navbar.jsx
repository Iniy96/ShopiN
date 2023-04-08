import React from 'react'
import { AiOutlineSearch, AiOutlineUser, AiOutlineHeart } from "react-icons/ai"
import { GiShoppingCart } from "react-icons/gi"
import { Link } from "react-router-dom"


export const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid ">
        {/* left side */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Country
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to='/'>India</Link></li>
                <li><Link className="dropdown-item" to='/'>America</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Currency
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to='/'>USD</Link></li>
                <li><Link className="dropdown-item" to='/'>INR</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/products/1'>Men</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/products/2'>Women</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/products/3'>Children</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to='/products/4'>Accessories</Link>
            </li>
          </ul>

        </div>
        {/* center */}
        <Link className="navbar-brand fs-4 fw-bold" to='/'>ShopiN</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarrightbutton" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* right Side */}
        <div className="collapse navbar-collapse" id="navbarrightbutton">
          <ul className="navbar-nav ms-auto me-0 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/'>About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link ">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ">Store</Link>
            </li>
          </ul>
          <ul className="navbar-nav me-0 ms-3  mb-2 mb-lg-0 flex-row">
            <li className="nav-item fs-5 mx-2">
              <AiOutlineSearch />
            </li>
            <li className="nav-item fs-5 mx-2">
              <AiOutlineUser />
            </li>
            <li className="nav-item fs-5 mx-2">
              <AiOutlineHeart />
            </li>
            <li className="nav-item fs-5 mx-2 position-relative">
              <GiShoppingCart />
              <span className="position-absolute start-100 translate-middle badge rounded-pill bg-secondary"
                style={{ fontSize: "12px", top: "6px" }}>
                9
              </span>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}
