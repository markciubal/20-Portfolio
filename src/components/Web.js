import { React, useEffect, useState, useRef } from 'react';
import '../custom.scss';
import { Parallax, Background } from "react-parallax";

function Web() {
    useEffect(() => {
        document.getElementById('web-chorechampion-video').playbackRate = 2;
    });
    return (
        <div id="web">
            <div className="row h-100 p-2 g-col-6">
                <h2>Web</h2>
                <hr></hr>
                <Parallax
                    bgImage="web-chorechampion.png"
                    strength={300}
                    blur={{ min: -15, max: 15 }}
                    className="rounded-3"
                >
                    <div id="web-chorechampion" className="row justify-content-center my-4 rounded-3">
                        <div className="col-12 col-md-4 p-3 portfolio-item-transparent align-items-center text-center align-self-center d-flex rounded-3">
                            <div className="mx-auto w-100 py-4 my-4">
                                <h3 className="chorechampion-heading">CHORECHAMPION</h3>
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
                        <div className=" col-12 col-md-4 col-lg-4 text-center ">
                            <video className="rounded-4 my-5" id="web-chorechampion-video" src="web-chorechampion.mp4" width="270" height="564" autoPlay controls muted loop></video>
                        </div>
                        <div className="p-3 align-items-center container-fluid align-self-center col-12 col-md-12 col-lg-4">
                            <h1 className="knock-out-text text-left">Knock out your tasks with CHORECHAMPION.</h1>
                            <h2 className="knock-out-subtext text-left">Built by and for the attention deficient.</h2>
                        </div>
                    </div>
                </Parallax>
            </div>
        </div>
    )
}

export default Web;