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
                        <h3>ADDITIONAL SKILLS</h3>
                        <p>HTML, CSS, Bootstrap, Tailwind, JavaScript, Handlebars, PHP, MySQL, PostgreSQL, Sequelize, minimal
MERN stack experience, Python, GitHub</p>
                        <p>You can download my resume <a class="btn btn-active" href="Mark Ciubal Resume.pdf">here</a>.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume;