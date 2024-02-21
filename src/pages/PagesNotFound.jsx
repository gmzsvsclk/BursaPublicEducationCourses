import React from 'react'
import {Link} from 'react-router-dom'


function PagesNotFound() {
  return (
    <div>
        <h1>Sayfa Bulunamadı!</h1>
        <p>Aradığınız Sayfa Mevcut Değil.</p>
        <Link to="/" className='btn btn-info'>Anasayfa'ya gidiniz.</Link>
    </div>
  )
}

export default PagesNotFound