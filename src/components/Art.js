import { React, useEffect, useState, useRef } from 'react';
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";

import '../custom.scss';

function Art() {
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        document.getElementById('art-trex-video').playbackRate = 0.5;
        document.getElementById('art-terrain-video').playbackRate = 0.75;
    });
    return (
        <div id="art" className="row align-items-md-stretch">
            <div className="col-md-6">
                <div className="portfolio-item rounded-3">
                    <div>
                        <h2>Art</h2>
                        <hr></hr>
                        <h3>Terrain Light</h3>
                        <p>I used to look at maps a lot, and terrain features were always beautiful to look at.</p>
                        <p>Using the grain of plywood as a guide, I used a jigsaw to cut out the different layers. I connected them together, and extruded the layers using threaded rods. Lastly, I wired up lights in the back of the piece to give the glowing appearance.</p>
                    </div>
                    <video id="art-terrain-video" className="w-100 rounded-3" src="art-terrain.mp4" muted autoPlay loop onHover={() => setIsPlaying(!isPlaying)}></video>
                </div>
            </div>
            <div className="col-md-6">
            <div className="portfolio-item rounded-3">
                <h3>Prehistoric Plant Play</h3>
                <p>Old meets new with this decorative mix-up.</p>
                <video id="art-trex-video" className="w-100 rounded-3" src="art-trex.mp4" muted autoPlay loop></video>
            </div>
            </div>
        </div>
    )
}

export default Art;