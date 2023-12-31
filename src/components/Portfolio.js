import { React, useEffect, useState, useRef } from 'react';
import '../custom.scss';
import { Parallax, Background } from "react-parallax";
import PageHeader from './PageHeader';

function Portfolio() {
    useEffect(() => {
        document.getElementById('portfolio-chorechampion-video').playbackRate = 2;
    });
    return (                
        <>
            <PageHeader title="Portfolio" />
            <div  id="portfolio" className="row h-100 p-2 g-col-6">
                <Parallax
                    bgImage="portfolio-pinpoint.jpg"
                    strength={300}
                    blur={{ min: -15, max: 15 }}
                    className="rounded-3"
                >
                    <div id="portfolio-chorechampion" className="row justify-content-center my-4 rounded-3">
                        <div className="col-12 col-md-4 p-3 portfolio-item-transparent align-items-center text-center align-self-center d-flex rounded-3">
                            <div className="mx-auto w-100 py-4 my-4">
                                <h3 className="chorechampion-heading"></h3>
                                <img src="pinpoint-logo.svg" style={{height: "25px"}}></img><span style={{verticalAlign: 'middle', fontSize: '20pt'}}>inpoint</span>
                                <p>Pinpoint was a group project to build a geospatial social network platform.</p>
                                <p>Technologies used: JavaScript, CSS, React, GraphQL, Apollo, React MapGL.</p>
                                <a className="btn rounded-2" href="https://pinpoint-davis-383be2067b3d.herokuapp.com/" target="_blank" rel="noreferrer">Pinpoint</a> 
                                <a href="https://github.com/markciubal/project-3" target="_blank" rel="noreferrer">
                                    <svg style={{marginTop: "-5px"}}  height="16" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
                                        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        {/* <div className="col-12 col-md-4 col-lg-4 text-center ">
                            <iframe className="rounded-4 my-5" id="portfolio-chorechampion-video" src="https://pinpoint-davis-383be2067b3d.herokuapp.com/" width="270" height="564"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div> */}
                        <div className="p-3 align-items-center container-fluid align-self-center col-12 col-md-12 col-lg-4">
                            <h1 className="knock-out-text text-left">Comment anywhere.</h1>
                            <h2 className="knock-out-subtext text-left">Pin the world.</h2>
                        </div>
                    </div>
                </Parallax>
            </div>
            <div  id="portfolio" className="row h-100 p-2 g-col-6">
                <Parallax
                    bgImage="portfolio-chorechampion.png"
                    strength={300}
                    blur={{ min: -15, max: 15 }}
                    className="rounded-3"
                >
                    <div id="portfolio-chorechampion" className="row justify-content-center my-4 rounded-3">
                        <div className="col-12 col-md-4 p-3 portfolio-item-transparent align-items-center text-center align-self-center d-flex rounded-3">
                            <div className="mx-auto w-100 py-4 my-4">
                                <h3 className="chorechampion-heading"></h3>
                                <img src="chorechampion-dark.svg" style={{height: "25px"}}></img><img src="chorechampion-text-dark.svg" style={{height: "25px"}}></img>
                                <p>CHORECHAMPION was a collaborative project during a coding bootcamp. I worked primarily on the UI/UX, as well as the knapsack problem associated with maximizing time used.</p>
                                <p>Technologies used: JavaScript, CSS, Handlebars, MySQL, Sequelize.</p>
                                <p>Use the login: 1@1.com, password: password12345</p>
                                <a className="btn rounded-2" href="https://chore-champion-6838d87c31f6.herokuapp.com/" target="_blank" rel="noreferrer">CHORECHAMPION</a> 
                                <a href="https://github.com/markciubal/chore-champion" target="_blank" rel="noreferrer">
                                    <svg style={{marginTop: "-5px"}}  height="16" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
                                        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 text-center ">
                            <video className="rounded-4 my-5" id="portfolio-chorechampion-video" src="portfolio-chorechampion.mp4" width="270" height="564" autoPlay controls muted loop></video>
                        </div>
                        <div className="p-3 align-items-center container-fluid align-self-center col-12 col-md-12 col-lg-4">
                            <h1 className="knock-out-text text-left">Knock out your tasks with CHORECHAMPION.</h1>
                            <h2 className="knock-out-subtext text-left">Built by and for the attention deficient.</h2>
                        </div>
                    </div>
                </Parallax>
            </div>
            {/* REGEXSAURUS and Retro Weather Dashboard */}
            <div className="row align-items-center">
            <div className="col-12 col-md-6 my-2">
                    <Parallax
                        bgImage="portfolio-pick-a-pic.jpg"
                        strength={300}
                        blur={{ min: -15, max: 15 }}
                        className="rounded-3"
                    >
                        <div id="portfolio-chorechampion" className="row justify-content-end my-4 rounded-3">
                            <div className="col-10 col-md-6 p-3 m-4 portfolio-item-transparent align-items-center text-center align-self-center d-flex rounded-3">
                                <div className="mx-auto w-100 py-4 my-4">
                                    <h3 className="chorechampion-heading">Pick-a-Pic</h3>
                                    <p>Pick-a-Pick is a small application I contributed to that is intended for users with a disability or language barrier. A choice is communicated clearly using the application. Users can select from selections of pictures. The user searches for pictures, and options can be presented. Also, there is a speech feature that will say the text in English.</p>
                                    <p>Technologies used: JavaScript, CSS</p>
                                    <a href="https://github.com/markciubal/pick-a-pic" target="_blank" rel="noreferrer">
                                        <svg style={{marginTop: "-5px"}}  height="16" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
                                            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                </div>
                <div className="col-12 col-md-6 my-2">
                    <Parallax
                        bgImage="portfolio-regexsaurus.jpg"
                        strength={300}
                        blur={{ min: -15, max: 15 }}
                        className="rounded-3"
                    >
                        <div id="portfolio-chorechampion" className="row justify-content-left my-4 rounded-3">
                            <div className="col-10 col-md-6 p-3 m-4 portfolio-item-transparent align-items-center text-center align-self-center d-flex rounded-3">
                                <div className="mx-auto w-100 py-4 my-4">
                                    <h3 className="chorechampion-heading">REGEXSAURUS</h3>
                                    <p>You can find an AI helper I built called REGEXSAURUS that will break down a REGEX statement for you!</p>
                                    <p>Technologies used: JavaScript, CSS, ChatGPT API</p>
                                    <a id="regexsaurus" className="btn rounded-2" href="https://regexsaurus-a27124d086aa.herokuapp.com/" target="_blank" rel="noreferrer">REGEXSAURUS</a> 
                                    <a href="https://github.com/markciubal/17-REGEXSAURUS" target="_blank" rel="noreferrer">
                                        <svg style={{marginTop: "-5px"}}  height="16" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
                                            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                </div>
            </div>
            <div className="row align-items-center">
            <div className="col-12 col-md-6 my-2">
                    <Parallax
                        bgImage="portfolio-retro-weather-dashboard.jpg"
                        strength={300}
                        blur={{ min: -15, max: 15 }}
                        className="rounded-3"
                    >
                        <div id="portfolio-chorechampion" className="row justify-content-end my-4 rounded-3">
                            <div className="col-10 col-md-6 p-3 m-4 portfolio-item-transparent align-items-center text-center align-self-center d-flex rounded-3">
                                <div className="mx-auto w-100 py-4 my-4">
                                <h3 className="chorechampion-heading">RETRO WEATHER DASHBOARD</h3>
                                    <p>Type in your location and get back some retro looking weather information.</p>
                                    <p>Technologies used: JavaScript, CSS</p>
                                    <a href="https://github.com/markciubal/17-REGEXSAURUS" target="_blank" rel="noreferrer">
                                        <svg style={{marginTop: "-5px"}}  height="16" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
                                            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                </div>
                <div className="col-12 col-md-6 my-2">
                    <Parallax
                        bgImage="portfolio-technical-quiz.jpg"
                        strength={300}
                        blur={{ min: -15, max: 15 }}
                        className="rounded-3"
                    >
                        <div id="portfolio-chorechampion" className="row justify-content-left my-4 rounded-3">
                            <div className="col-10 col-md-6 p-3 m-4 portfolio-item-transparent align-items-center text-center align-self-center d-flex rounded-3">
                                <div className="mx-auto w-100 py-4 my-4">
                                <h3 className="chorechampion-heading">Technical Quiz</h3>
                                    <p>Technical quiz for some JavaScript concepts. This can be adapted by supplying different JSON data in a specific format.</p>
                                    <p>Technologies used: JavaScript, CSS</p>
                                    <a href="https://github.com/markciubal/04-Technical-Quiz" target="_blank" rel="noreferrer">
                                        <svg style={{marginTop: "-5px"}}  height="16" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
                                            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                </div>
            </div>
            <div className="row align-items-center">
            <div className="col-12 col-md-6 my-2">
                    <Parallax
                        bgImage="portfolio-scribe.jpg"
                        strength={300}
                        blur={{ min: -15, max: 15 }}
                        className="rounded-3"
                    >
                        <div id="portfolio-chorechampion" className="row justify-content-end my-4 rounded-3">
                            <div className="col-10 col-md-6 p-3 m-4 portfolio-item-transparent align-items-center text-center align-self-center d-flex rounded-3">
                                <div className="mx-auto w-100 py-4 my-4">
                                    <h3 className="chorechampion-heading">Scribe</h3>
                                    <p>Used boilerplate from an assignment to style a note taking application.</p>
                                    <p>Technologies used: JavaScript, CSS</p>
                                    <a href="https://github.com/markciubal/11-Scribe" target="_blank" rel="noreferrer">
                                        <svg style={{marginTop: "-5px"}}  height="16" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
                                            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                </div>
                <div className="col-12 col-md-6 my-2">
                    <Parallax
                        bgImage="portfolio-tastebook.jpg"
                        strength={300}
                        blur={{ min: -15, max: 15 }}
                        className="rounded-3"
                    >
                        <div id="portfolio-chorechampion" className="row justify-content-left my-4 rounded-3">
                            <div className="col-10 col-md-6 p-3 m-4 portfolio-item-transparent align-items-center text-center align-self-center d-flex rounded-3">
                                <div className="mx-auto w-100 py-4 my-4">
                                <h3 className="chorechampion-heading">Tastebook Routes and Models</h3>
                                    <p>Built the routes and models for a fake social media website.</p>
                                    <p>Technologies used: MongoDB, Sequelize, JavaScript, CSS</p>
                                    <a href="https://github.com/markciubal/18-Tastebook" target="_blank" rel="noreferrer">
                                        <svg style={{marginTop: "-5px"}}  height="16" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
                                            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                </div>
            </div>
        </>
    )
}

export default Portfolio;