import React, { useState } from 'react'
import { Link } from 'react-scroll';
import  {Link as Link2 ,useNavigate} from 'react-router-dom';

import * as Icon from 'react-feather';
import {
    NavbarBrand,
    NavbarToggler,
    NavItem,
    Nav,
    Collapse
} from "reactstrap";
// Import Logo
import logodark from "../../assets/images/logo-dark.png";
import logolight from "../../assets/images/logo-light.png";

export default function NavbarPage() {


    const [isOpen, setMenu] = useState(true);

    window.addEventListener("scroll", windowScroll);

    function windowScroll() {
        const navbar = document.getElementById("navbar");
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            navbar.classList.add("nav-sticky");
        } else {
            navbar.classList.remove("nav-sticky");
        }
    }
    const toggleMenu = () => {
        setMenu(!isOpen)
    }

    const hoverStyle = {
        color: '#f00', // couleur du texte au survol
        fontSize: '20px', // taille de la police au survol
        textDecoration: 'underline' // soulignement au survol
      };
 
    return (

        <>
            <nav id="navbar" className="navbar navbar-expand-lg fixed-top sticky">
                <div className="container-lg "> <NavbarToggler className="navbar-toggler" onClick={toggleMenu}>
                    <Icon.Menu />
                </NavbarToggler>

                    <NavbarBrand className="navbar-brand" to="/">
                        <img src={logodark} className="logo-light-mode" alt="" />
                        <img src={logolight} className="logo-dark-mode" alt="" />
                    </NavbarBrand>

                    <Collapse className={`navbar-collapse ${isOpen === true ? 'hidden' : 'show'}`} id="navbarSupportedContent">

                        <Nav className="navbar-nav ms-auto  mb-lg-0" id="navbar-navlist">
                            <NavItem>
                                <Link activeClass="active" spy={true} smooth={true} duration={500} to="home" className="nav-link " >Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link activeClass="active" spy={true} smooth={true} duration={500} to="features" className="nav-link " >Features</Link>
                            </NavItem>
                            <NavItem>
                                <Link activeClass="active" spy={true} smooth={true} duration={500} to="pricing" className="nav-link" >Pricing</Link>
                            </NavItem>
                            <NavItem>
                                <Link activeClass="active" spy={true} smooth={true} duration={500} to="review" className="nav-link" >Review</Link>
                            </NavItem>
                            <NavItem>
                                <Link activeClass="active" spy={true} smooth={true} duration={500} to="blog" className="nav-link" >News</Link>
                            </NavItem>
                            <NavItem>
                                <Link activeClass="active" spy={true} smooth={true} duration={500} to="contact" className="nav-link" >Contact Us</Link>
                            </NavItem>
                        </Nav>
                         <ul className="lst-inline menu-social mb-0 ps-lg-4 ms-auto ">
                            <li className="list-inline-item">
                            <Link2 to='/login' state={{ userType:'Admin' }} className='btn  btn-primary  '>Login </Link2>
                            </li>
                            <li className="list-inline-item ms-4">
                            <Link2 to='/login' state={{ userType:'Guest' }} className='nav-link text-uppercase hover-effect' > Join As Guest</Link2>
                            </li>
                        </ul> 
            
                    </Collapse>
                </div>
            </nav>

          
        </>

        
    )
}
function handleButtonClick() {
    // Rediriger l'utilisateur vers une autre page
    window.location.href = '/login';
  }