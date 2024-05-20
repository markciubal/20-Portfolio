import { React, useEffect, useState, useRef } from 'react';
import '../custom.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
import Art from '../components/Art';
import Web from './Portfolio';
import Photography from '../components/Photography';
import Contact from './Contact';
import About from '../components/About';


function Header(props) {
    function setActiveHeader(clickedHeader) {
        let headers = document.querySelectorAll('.header-btn');
        console.log(headers);

        headers.forEach((header) => {
            header.classList.remove('btn-active');            
        });
        clickedHeader.classList.add('btn-active');
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary rounded-3" aria-label="Eleventh navbar example">
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
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="navbars">
                    <ul className="navbar-nav ms-auto">
                        {/* TODO: Make these into components. */}
                        {/* About Me, Portfolio, Contact, and Resume */}
                        <li className="nav-item ms-auto">
                            <a className="btn-active header-btn btn m-2 rounded-2" onClick={(e) => {
                                props.setActivePage("about");
                                setActiveHeader(e.target);
                            }}>About</a>
                        </li>
                        <li className="nav-item ms-auto">
                            <a className="header-btn btn m-2 rounded-2" onClick={(e) => {
                                props.setActivePage("portfolio");
                                setActiveHeader(e.target);
                            }}>Portfolio</a>
                        </li>
                        <li className="nav-item ms-auto">
                            <a className="header-btn btn m-2 rounded-2" onClick={(e) => {
                                props.setActivePage("art");
                                setActiveHeader(e.target);
                            }}>Art</a>
                        </li>
                        {/* <li className="nav-item ms-auto">
                            <a className="btn m-2 rounded-2" onClick={() => props.setActivePage("art")}>Art</a>
                        </li> */}
                        {/* <li className="nav-item ms-auto">
                            <a className="btn m-2 rounded-2" onClick={() => props.setActivePage("photography")}>Photography</a>
                        </li> */}
                        <li className="nav-item ms-auto">
                            <a className="header-btn btn m-2 rounded-2" onClick={(e) => {
                                    props.setActivePage("contact");
                                    setActiveHeader(e.target);
                                }}>Contact</a>
                        </li>
                        <li className="nav-item ms-auto">
                            <a className="header-btn btn m-2 rounded-2" onClick={(e) => {
                                    props.setActivePage("resume");
                                    setActiveHeader(e.target);
                                }}>Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Header;