import React from 'react'
import {Link} from "react-router-dom"

export const Footer = () => {
  return (
    
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p class="col-md-4 mb-0 text-body-secondary">© 2023 Company, Inc</p>

      <Link to="/" class="col-md-4 d-flex align-items-center fw-bold fs-4 justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        ShopiN
      </Link>

      <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item"><Link to="/" class="nav-link px-2 text-body-secondary">Home</Link></li>
        <li class="nav-item"><Link to="/" class="nav-link px-2 text-body-secondary">About</Link></li>
        <li class="nav-item"><Link to="/" class="nav-link px-2 text-body-secondary">Contact</Link></li>
        <li class="nav-item"><Link to="/" class="nav-link px-2 text-body-secondary">Store</Link></li>
      </ul>
    </footer>
    
  )
}
