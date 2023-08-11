import { React, useEffect, useState, useRef } from 'react';
import '../custom.scss';

function Footer() {
    return (
        <div id="footer" className="row align-items-md-stretch">
            <div className="col-12">
                <div className="h-100 p-5 rounded-3">
                <h2>Contact</h2>
                <div className="row align-items-center">
                    <div className="col">
                        <a href="mailto:i@markciubal.com?subject=I saw your website!&body=Hi there, I'd like to contact you about something I saw on your website." >i@markciubal.com</a>
                        <br/>
                        <a href="https://www.linkedin.com/in/markciubal/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <button className="btn btn-outline-light" type="button">Example button</button>
                </div>
            </div>
        </div>
    )
}

export default Footer;