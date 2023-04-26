import React from 'react'
import { Link } from 'react-router-dom'
import image from '../favicon.ico'

const Navbar = (props) => {
  return (
    <>
      <div className="container-fluid bg-primary">
        <marquee>&#x2709; poulamimukherjee@gmail.com</marquee>
      </div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <a className="navbar-brand" href="#">
          <img src={image} className='img-fluid' style={{ height: '50px', width: '50px' }} alt="" srcset="" />
          TextUTILS</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="w-100" id="navbarNavAltMarkup">
          <div className="d-flex justify-content-between">
            <div className="navbar-nav">
              <Link className="nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
              <Link className="nav-link" to="/style">Style</Link>
              <Link className="nav-link" to="/about">About</Link>
            </div>
            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="customSwitch1" onClick={props.toggleMode}/>
                <label class={`custom-control-label ${props.mode==='light'? 'text-black' : 'text-white'}`} for="customSwitch1">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar