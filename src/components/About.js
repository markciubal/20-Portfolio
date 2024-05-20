import { React, ReactNode, Image, useEffect, useState, useRef } from 'react';
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../custom.scss';
import PageHeader from './PageHeader';

function setActiveHeader(clickedHeader) {
    let headers = document.querySelectorAll('.header-btn');
    console.log(headers);

    headers.forEach((header) => {
        header.classList.remove('btn-active');            
    });
    clickedHeader.classList.add('btn-active');
}
const About = (props) => {
    return (
        <>
            <PageHeader title="About" />
                <div id="about-about" className="row h-100 p-2 g-col-6">
                    <div className="col-md-6 my-2 h-100 text-center">
                        <Parallax
                            bgImage="who-am-i.jpg"
                            strength={300}
                            blur={{ min: -15, max: 15 }}
                            className="rounded-3"
                        >
                            <div id="about-who-am-i" className="row justify-content-center m-4 rounded-3">
                                <div className="col-12 p-3 about-item-transparent align-items-center text-center align-self-center d-flex rounded-3">
                                    <div className="mx-auto w-100 py-4 my-4">
                                    <h2>WHO AM I</h2>
                                    <p>
                                        I am an analyst and web developer. I am interested in philosophy, politics, programming, photography, and alliterations.
                                    </p>
                                    <p>
                                        Hop on over to the <a className="text-link" onClick={(e) => {
                                            props.setActivePage("contact");
                                            setActiveHeader(e.target);
                                        }}>contact</a> page to get in touch with me, or use <a className="text-link" href="https://knowledged-c6f63efaf1e0.herokuapp.com/">knowledged</a> to post on my geospatial social networking app!
                                    </p>
                                    <p>
                                        I am currently working as a freelance full-stack developer and student in the Roseville area.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </Parallax>
                    </div>
                    <div className="col-md-6 my-2 h-100 text-center">
                        <Parallax
                            bgImage="knowledged.jpg"
                            strength={300}
                            blur={{ min: -15, max: 15 }}
                            className="rounded-3"
                        >
                            <div id="about-knowledged" className="row justify-content-center m-4 rounded-3">
                                <div className="col-12 p-3 about-item-transparent align-items-center text-center align-self-center d-flex rounded-3">
                                    <div className="mx-auto w-100 py-4 my-4">
                                    <h3><a href="https://www.growl.world/"><img src="../growl.svg" width="50px" style={{ marginRight: "10px"}}/>GROWL</a></h3>
                                    <p>
                                        Growl bridges the gap between citizens and their leaders.
                                    </p>
                                    <p>
                                    The app allows users to pinpoint a specific location on a map where they identify a problem, providing a visual representation of issues within a community. It automatically retrieves and displays contact information for elected leaders responsible for that area, facilitating direct communication. Users can email these leaders directly from the app, enabling swift and effective advocacy for addressing local concerns.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </Parallax>
                    </div>
            </div>
        </>
    )
}

export default About;