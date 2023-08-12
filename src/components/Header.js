import { React, useEffect, useState, useRef } from 'react';
import '../custom.scss';
import 'bootstrap/dist/js/bootstrap.bundle';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" aria-label="Eleventh navbar example">
            <div className="container-md">
                <a className="navbar-brand" href="#">MARK CIUBAL</a>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbars" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="navbars">
                    <ul className="navbar-nav ms-auto">
                        {/* About Me, Portfolio, Contact, and Resume */}
                        <li className="nav-item ms-auto">
                            <a className="btn m-2 rounded-2" href="#about">About</a>
                        </li>
                        <li className="nav-item ms-auto">
                            <a className="btn m-2 rounded-2" href="#web">Web</a>
                        </li>
                        <li className="nav-item ms-auto">
                            <a className="btn m-2 rounded-2" href="#art">Art</a>
                        </li>
                        <li className="nav-item ms-auto">
                            <a className="btn m-2 rounded-2" href="#photography">Photography</a>
                        </li>
                        <li className="nav-item ms-auto">
                            <a className="btn m-2 rounded-2" href="#resume">Resume</a>
                        </li>
                        <li className="nav-item ms-auto">
                            <a className="btn m-2 rounded-2" href="#footer">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;