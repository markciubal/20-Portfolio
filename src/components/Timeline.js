const Timeline = (props) => {
    return (
    <div id="timeline-about" className="row h-100 p-2 g-col-6">
        <div id="about" className="row align-items-md-stretch">
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "white", color: "#000"}}
                    date="Present"
                    iconStyle={{ background: '#fff', color: '#fff', objectFit: "cover" }}
                    icon={<img class="vertical-timeline-element-icon" src="./mark-ciubal.jpg"></img>}>
                    <h3 className="vertical-timeline-element-title">Me</h3>
                    <p>Living with my wife and dog in Roseville, California.</p>
                    {/* TODO: Add map of Roseville to page like in the youth section. */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99552.44119614415!2d-121.37501799781158!3d38.76338777930034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809b1f65623c1879%3A0x22af4a52ba493999!2sRoseville%2C%20CA!5e0!3m2!1sen!2sus!4v1692138556582!5m2!1sen!2sus" className="w-100" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <p>My hobbies are spending time with my family, web development, internet of things, philosophy, politics, and programming!</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ backgroundImage: "url(portfolio-tastebook.jpg)", color: "#aaa"}}
                    date="March 13, 2023 - September 5, 2023"
                    iconStyle={{ background: '#fff', color: '#fff', objectFit: "cover" }}
                    icon={<img class="vertical-timeline-element-icon" src="./uc-davis.png"></img>}>
                    <h3 className="vertical-timeline-element-title">Coding Bootcamp</h3>
                    <h5>University of California Davis</h5>
                    <h5>Continuing and Professional Education</h5>
                    <h5>Full-stack Developer Certification</h5>
                    <p>
                        Learned the modern tools and processes behind full-stack development.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background:"#e5e5e5", color: "#AF2024"}}
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
                    contentStyle={{ color: "#12034e"}}
                    date="March 10, 2011 - December 31, 2016"
                    iconStyle={{ background: '#fff', color: '#fff', objectFit: "cover" }}
                    icon={<img class="vertical-timeline-element-icon" src="./leidos.svg"></img>}>
                    <h3 className="vertical-timeline-element-title">Intelligence Analyst</h3>
                    <h5 className="vertical-timeline-element-subtitle">Beale Air Force Base, CA</h5>
                    <p>
                        As a SIGINT Fusion Analyst (SFA) program manager, produced training documentation, oversight of analysts, and subject matter expertise. Collaborated with other resident subject matter experts to identify problems with exploiting a specific SIGINT target set. Utilized the expertise of other analysts to develop unique solutions for other problems within the community, including dissemination methods, interactive historic request for information (RFI) solutions, and all-source intelligence analysis.
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
                    contentStyle={{ background: 'white', color: '#CC0000' }}
                    date="July 10, 2006 - July 11, 2011"
                    iconStyle={{ background: '#fff', color: '#CC0000' }}  
                    icon={<img class="vertical-timeline-element-icon" src="./usmc-logo.svg"></img>}>
                    <h3 className="vertical-timeline-element-title">United States Marine Corps</h3>
                    <h5 className="vertical-timeline-element-subtitle">Marine Corps Recruit Depot, San Diego, CA, USA</h5>
                    <h5 className="vertical-timeline-element-subtitle">Camp Pendleton, CA, USA</h5>
                    <p>
                        Trained over 75 personnel in Digital Network Intelligence (DNI) and SIGINT Geospatial Metadata Analysis (GMA) as a certified National Cryptologic School (NCS) adjunct instructor. Trained analysts during a 1 month long course required to deploy as an analyst.
                    </p>
                    <p>
                    In support of Operation Iraqi Freedom, performed the duties as the senior analyst and liaison officer in a joint service environment. Produced and enforced quality control and dissemination of over 250 time sensitive reports and products. Employed multi-intelligence (SIGINT, HUMINT, IMINT and OSINT) analysis and national level databases to report on and exploit high value targets. Assisted in the disruption of insurgent networks through the use of analytic techniques.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "linear-gradient(217deg, rgba(4, 106, 56, 0.75), rgba(4, 106, 56, 0.75) 70.71%), linear-gradient(127deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0) 70.71%), linear-gradient(336deg, rgba(255, 255, 255, .8), rgba(255, 255, 255, 0) 70.71%)", color: '#333' }}
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
            </VerticalTimeline>
        </div>
    </div>);
}