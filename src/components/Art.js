import { React, useEffect, useState, useRef } from 'react';
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";

import '../custom.scss';

function Art() {
    useEffect(() => {
        document.getElementById('art-trex-video').playbackRate = 2;
        document.getElementById('art-terrain-video').playbackRate = 0.75;
        document.getElementById('art-terrain-video').playbackRate = 0.75;
    });
    return (
        <Parallax strength={300}>
            <div id="art" className="row align-items-md-stretch">
                <h2>Art</h2>
                <hr></hr>
                <div className="col-md-4">
                    <div className="terrain portfolio-item-gradient rounded-3">
                        <div>
                            <h3>Terrain Light</h3>
                            <p>Traced a path on plywood.</p>
                        </div>
                        <video id="art-terrain-video" className="w-100 rounded-3" src="art-terrain.mp4" onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()} controls muted loop></video>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="trex portfolio-item-gradient rounded-3">
                            <div>
                                <h3>Plants & Prehistoric</h3>
                                <p>A bit of life and death.</p>
                            </div>
                            <video id="art-trex-video" className="w-100 rounded-3" src="art-trex.mp4" onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()} controls muted loop></video>
                        </div>
                </div>
                <div className="col-md-4">
                    <div className="orbs portfolio-item-gradient rounded-3">
                            <div>
                                <h3>Orbs & Discs</h3>
                                <p>A menagerie on display.</p>
                            </div>
                            <video id="art-orb-video" className="w-100 rounded-3" src="art-orbs.mp4" onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()} controls muted loop></video>
                        </div>
                </div>
            </div>
            <hr></hr>
        </Parallax>
    )
}

export default Art;