import { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50){
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

 
    return(
<Router>
<Navbar expand="lg" className = {scrolled ? "scrolled" : "" }>
      <Container>
        <Navbar.Brand href="#home">
          <h3 className='name'>Margret</h3>
        {/* <img src={logo} alt='margret' /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon' > </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? "active navbar-link" : "navbar-link"} onClick ={() => {onUpdateActiveLink('home')}}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? "active navbar-link" : "navbar-link"} onClick ={() => {onUpdateActiveLink('skills')}}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? "active navbar-link" : "navbar-link"} onClick ={() => {onUpdateActiveLink('projects')}}>Projects</Nav.Link>     
          </Nav>
          <span className='navbar-text'>
          <div className='social-icon'>
                <a href="https://www.linkedin.com/in/margret-mauno-469b57190/?originalSubdomain=ke"><img src={navIcon1}/></a>
                <a href="https://www.facebook.com/margret.mauno.3/?paipv=0&eav=AfYCv50qD9WgZJBZ56S1AUebXKsmGxUp4uD4GgsmlxSTKdSZJ9IS0Jl_ShOIB4c-Lmo&_rdr"><img src={navIcon2}/></a>
                <a href="https://www.instagram.com/magy.cally_me/"><img src={navIcon3}/></a> 

          </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Router>
    )
}

//12:47