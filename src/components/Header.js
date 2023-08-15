import { React, useEffect, useState, useRef } from 'react';
import '../custom.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
import Art from '../components/Art';
import Web from '../components/Web';
import Photography from '../components/Photography';
import Footer from '../components/Footer';
import About from '../components/About';


function Header(props) {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" aria-label="Eleventh navbar example">
            <div className="container-md">
                <a className="navbar-brand" href="#">MARK CIUBAL</a>
                <button 
                    className="navbar-toggler collapsed"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbars"
                    aria-controls="navbars"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon">+</span>
                </button>

                <div className="navbar-collapse collapse" id="navbars">
                    <ul className="navbar-nav ms-auto">
                        {/* TODO: Make these into components. */}
                        {/* About Me, Portfolio, Contact, and Resume */}
                        <li className="nav-item ms-auto">
                            <a className="btn m-2 rounded-2" onClick={() => props.setActivePage("about")}>About</a>
                        </li>
                        <li className="nav-item ms-auto">
                            <a className="btn m-2 rounded-2" onClick={() => props.setActivePage("web")}>Web</a>
                        </li>
                        {/* <li className="nav-item ms-auto">
                            <a className="btn m-2 rounded-2" onClick={() => props.setActivePage("art")}>Art</a>
                        </li> */}
                        {/* <li className="nav-item ms-auto">
                            <a className="btn m-2 rounded-2" onClick={() => props.setActivePage("photography")}>Photography</a>
                        </li> */}
                        <li className="nav-item ms-auto">
                            <a className="btn m-2 rounded-2" onClick={() => props.setActivePage("resume")}>Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Header;