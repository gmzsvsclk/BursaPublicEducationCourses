import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-body-primary" data-bs-theme="danger">
     <div className="container-fluid">
    <a className="navbar-brand text-danger" href="#">
    <strong>SANAT VE MESLEK EĞİTİM KURSLARI</strong>
    </a>
  </div>
     <div className="container">
   <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
  <NavLink className="nav-brand text-warning" style={{marginRight:'12px'}} to="/"> Anasayfa </NavLink>
   <NavLink className="nav-brand text-warning"style={{marginRight:'12px'}} to="/course" > Busmek Kursları </NavLink>
   <NavLink className="nav-brand text-warning" style={{marginRight:'12px'}} to="/teenage">Gençlik Merkezleri</NavLink>
   <NavLink className="nav-brand text-warning" style={{marginRight:'12px'}} to="/contact">İletişim</NavLink>
       
      </ul>
    </div>
  </div>
    
    
     
 
</nav>
    </>
  )
}

export default Navbar