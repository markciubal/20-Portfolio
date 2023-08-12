import { React, ReactNode, Image, useEffect, useState, useRef } from 'react';
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../custom.scss';

const About = () => {
    return (
        <>
            <div id="about" className="row align-items-md-stretch">
                <h2>About</h2>
                <hr></hr>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "linear-gradient(217deg, rgba(4, 106, 56, 0.8), rgba(4, 106, 56, 0.8) 70.71%), linear-gradient(127deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0) 70.71%), linear-gradient(336deg, rgba(255, 255, 255, .8), rgba(255, 255, 255, 0) 70.71%)", color: '#333' }}
                        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                        date="January 28, 1988 - July 10, 2006"
                        iconStyle={{ background: '#fff', color: '#fff' }}      
                        icon={<img class="vertical-timeline-element-icon" src="./eagle-rock.jpg"></img>}>
                        <h3 className="vertical-timeline-element-title">Youth</h3>
                        <h5 className="vertical-timeline-element-subtitle">Eagle Rock, CA, USA</h5>
                        <p>
                            Hello, world.

                            I'm from Eagle Rock, California.
                        </p>
                        <br/>
                        <iframe style={{height: "300px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26419.882801830412!2d-118.2254492453219!3d34.13392295269225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c3e1f2657969%3A0xe39d72026b3c08d6!2sEagle%20Rock%2C%20Los%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1691780314412!5m2!1sen!2sus" className="rounded-3 w-100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: '#CC0000' }}
                        date="July 10, 2006 - July 11, 2011"
                        iconStyle={{ background: '#fff', color: '#CC0000' }}  
                        icon={<img class="vertical-timeline-element-icon" src="./usmc-logo.svg"></img>}>
                        <h3 className="vertical-timeline-element-title">United States Marine Corps</h3>
                        <h5 className="vertical-timeline-element-subtitle">Marine Corps Recruit Depot, San Diego, CA, USA</h5>
                        <h5 className="vertical-timeline-element-subtitle">Camp Pendleton, CA, USA</h5>
                        <h5 className="vertical-timeline-element-subtitle">Fallujah, IZ</h5>
                        <h5 className="vertical-timeline-element-subtitle">Sinjar, IZ</h5>
                        <p>
                            Trained over 75 personnel in Digital Network Intelligence (DNI) and SIGINT Geospatial Metadata Analysis (GMA) as a certified National Cryptologic School (NCS) adjunct instructor. Trained analysts during a 3 day ArcGIS course. While deployed in support of Operation Iraqi Freedom, performed the duties as the senior analyst and liaison officer in a joint service environment. Produced and enforced quality control and dissemination of over 250 time sensitive reports and products. Employed multi-intelligence (SIGINT, HUMINT, IMINT and OSINT) analysis and national level databases to report on and exploit high value targets. Assisted in the disruption of insurgent networks through the use of analytic techniques.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ color: "#12034e"}}
                        date="March 10, 2011 - December 31, 2016"
                        iconStyle={{ background: '#fff', color: '#fff', objectFit: "cover" }}
                        icon={<img class="vertical-timeline-element-icon" src="./leidos.svg"></img>}>
                        <h3 className="vertical-timeline-element-title">Intelligence Analyst</h3>
                        <h5 className="vertical-timeline-element-subtitle">Beale Air Force Base, CA</h5>
                        <p>
                            As a SIGINT Fusion Analyst (SFA) program manager, collaborated with resident subject matter experts to identify problems with exploiting a specific SIGINT target set. Trained Air Force analysts during a 3 day ArcGIS course for National Security Agency (NSA) credit. Utilized the expertise of other analysts to develop unique solutions for other problems within the community, including dissemination methods, interactive historic request for information (RFI) solutions, and all-source intelligence analysis.
                        </p>
                        <p>
                            Full-stack developer for HASTE (High-Value Ad-Hoc SIGINT Tracking Environment), a web and Google Earth program using a PHP, MySQL, and jQuery solution to address specific requirements pertaining to a dynamic target. HASTE required a variety of programming languages and interfaces to build. It improved data comprehension for analysts and leadership. HASTE enabled users to view data in a variety of formats, with an emphasis on enhancing an analyst’s awareness of geo-temporal data with machine-assisted pattern analysis.
                        </p>
                        <br></br>
                        <iframe height="auto" style={{height: "300px"}} class="w-100" src="https://www.youtube.com/embed/VpfR28VsWhA" title="Some Google Earth animations." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
                    </VerticalTimelineElement>
                    {/* <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background:"black", color: "whitesmoke"}}
                        date="January 1, 2017 - November 28, 2018"
                        iconStyle={{ background: '#fff', color: '#fff', objectFit: "cover" }}
                        icon={<img class="vertical-timeline-element-icon" src="./fight-in-the-open.png"></img>}>
                        <h3 className="text-white vertical-timeline-element-title">Mental Health</h3>
                    </VerticalTimelineElement> */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background:"#AF2024", color: "#000"}}
                        date="January 1, 2018 - January 1, 2023"
                        iconStyle={{ background: '#fff', color: '#fff', objectFit: "cover" }}
                        icon={<img class="vertical-timeline-element-icon" src="./sierra-college.svg"></img>}>
                        <h3 className="vertical-timeline-element-title">Veterans Success Center</h3>
                        <h5>Sierra College, Rocklin, CA</h5>
                        <p>
                            Built tools using React and Chart.js to analyze student data, allowing for predictive modeling for the difficulty of students’ course loads.
                        </p>
                        <p>
                            Worked with students and supervised 10 Department of Veteran Affairs work-study employees to register, enroll, and enable payment for veterans and their dependents attending Sierra College using their Department of Veterans Affairs education benefits. Tasks include digitizing paperwork, data entry, report generation and customer interaction.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background:"black", color: "#aaa"}}
                        date="March 13, 2023 - September 5, 2023"
                        iconStyle={{ background: '#fff', color: '#fff', objectFit: "cover" }}
                        icon={<img class="vertical-timeline-element-icon" src="./sierra-college.svg"></img>}>
                        <h3 className="vertical-timeline-element-title">Learning</h3>
                        <h5>University of California Davis</h5>
                        <h5>    Full-stack Developer Certification</h5>
                        <p>
                            Learned the modern tools and processes behind full-stack development.
                        </p>
                        {/* <p>
                            Built several projects to help showcase my work!
                        </p>
                        <p>
                            I love feedback, go ahead and provide it here.
                        </p>
                        <form>
                            <input className="m-2 p-2 w-100 mx-auto rounded-2" type="text" id="name" placeholder="What should I call you?"></input>
                            <input className="m-2 p-2 w-100 mx-auto rounded-2" type="text" id="email" placeholder="How can I reach you?"></input>
                            <input className="m-2 p-2 w-100 mx-auto rounded-2" type="text" id="message" placeholder="What do you want to say?"></input>
                            <button className="m-2 p-2 w-100 mx-auto btn rounded-2" type="button" id="submit">Submit</button  >
                        </form> */}
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    )
}

export default About;