import { React, useEffect, useState, useRef } from 'react';
import '../App.css';
import PageHeader from './PageHeader';

function Resume() {
    return (
        <>
            <PageHeader title="Resume" />
            <div id="contact" className="row h-100 p-2 g-col-6">
                <div class="row justify-content-center">
                    <div class="col-6 text-center">
                    <p>You can download my resume <a class="p-1 btn btn-active" href="Mark Ciubal Resume.pdf">here</a>.</p>
                        <h3>ADDITIONAL SKILLS</h3>
                        <p>HTML, CSS, Bootstrap, Tailwind, JavaScript, Handlebars, PHP, MySQL, PostgreSQL, Sequelize, MERN stack experience, Python, GitHub</p>
                        <h3>EDUCATION</h3>
                        <h5>Formal Education</h5>
                        <p>A.S. in Natural Sciences | Sierra College, Rocklin, California | May 2020</p>
                        <p>Certified Full-Stack Developer Boot Camp | UC Davis, Online Program</p>
                        <p>Projected Completion 2024 - A.S in Computer Science | Sierra College, Rocklin, California</p>
                        <p>Projected Completion 2024 - A.A. in Philosophy | Sierra College, Rocklin, California</p>
                        <h5>Additional Training</h5>
                        <p>Network Exploitation and Target Development Immersion Training (NETA3001)</p>
                        <p>Training Methods for Cryptologic Instructors (EDUC2501)</p>
                        <p>Digital Network Intelligence Workshop (NETA2008)</p>
                        <p>Basic Geospatial Metadata Analysis for Deployers (DEPL2000)</p>
                        <p>Manual Morse Course (920-SQIA)</p>
                        <p>Communications Signals Collection and Processing Course (450 Course)</p>
                        <h5>MILITARY SERVICE</h5>
                        <p>United States Marine Corps | Sergeant | MOS: 2621 | July 2006 – July 2011</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume;