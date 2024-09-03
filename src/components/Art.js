import { React, useEffect, useState, useRef } from 'react';
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";

import '../custom.scss';

function Art() {
    // useEffect(() => {
    //     document.getElementById('art-trex-video').playbackRate = 2;
    //     document.getElementById('art-terrain-video').playbackRate = 0.75;
    //     document.getElementById('art-terrain-video').playbackRate = 0.75;
    // });
    const [price, setPrice] = useState(0);
    const [length, setLength] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [lights, setLights] = useState(0);
    const [units, setUnits] = useState('inches');
    const calculateUnits = (units) => {
        switch(units) {
            case 'inches':
                return 1;
            case 'feet':
                return 12;
            case 'meters':
                return 39.3701;
            case 'centimeters':
                return 0.393701;
            default:
                return 1;
        }
    }
    const calculatePrice = (units, length, width, height, lights) => {
        let lengthValue = (length * calculateUnits(units)) ** 1.35;
        let widthValue = (width * calculateUnits(units)) ** 1.35;
        let heightValue = (height * calculateUnits(units)) ** 1.35;
        let bulbValue = 10;
        let lightSocketValue = (20/6)*2
        let lightsValue = (bulbValue + lightSocketValue) * lights;
        let laborValue = 1.1;
        let price = (lengthValue + widthValue + heightValue + lightsValue)  ** laborValue;
        let priceRounded = Math.round(price / 5) * 5;
        setPrice(priceRounded);
    }
    useEffect(() => {
        document.getElementById('units').addEventListener('input', (event) => {
            setUnits(event.target.value);
        });
        document.getElementById('length').addEventListener('input', (event) => {
            setLength(event.target.value);
        });
        document.getElementById('width').addEventListener('input', (event) => {
            setWidth(event.target.value);
        });
        document.getElementById('height').addEventListener('input', (event) => {
            setHeight(event.target.value);
        });
        document.getElementById('lights').addEventListener('input', (event) => {
            setLights(event.target.value);
        });
    }, []);
    useEffect(() => {
        calculatePrice(units, length, width, height, lights);
    }, [units, length, width, height, lights]);
    return (
        <Parallax strength={300}>
            <div id="art" className="row align-items-md-stretch">
                <h2>Art</h2>
                <hr></hr>
                <div className="p-3 col-md-4">
                    <div className="terrain portfolio-item-transparent rounded-3">
                        <div className="p-3">
                            <h3>Terrain Light</h3>
                            <p>Traced a path on plywood.</p>
                        </div>
                        <video id="art-terrain-video" className="w-100 rounded-3" src="art-terrain.mp4" onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()} controls muted loop></video>
                        <div className="p-3">
                            <h2>Terrain Light</h2>
                            <p>Calculate approximate prices.</p>
                            <form>
                                <label>Units</label>
                                <select className="m-2" id="units" name="units">
                                    <option value="inches">Inches</option>
                                    <option value="feet">Feet</option>
                                    <option value="meters">Meters</option>
                                    <option value="centimeters">Centimeters</option>
                                </select><br/>
                                <label>Length:</label>
                                <input className="m-2" type="number" id="length" name="length" placeholder="Length"></input><br/>
                                <label>Width:</label>
                                <input className="m-2" type="number" id="width" name="width" placeholder="Width"></input><br/>
                                <label>Height:</label>
                                <input className="m-2" type="number" id="height" name="height" placeholder="Height"></input><br/>
                                <label>Lights:</label>
                                <input className="m-2" type="number" id="lights" name="lights" placeholder="Lights"></input><br/>
                                <label>Price:</label>
                                <input className="m-2" type="number" id="price" name="price" placeholder="Price" disabled value={price}></input><br/>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <div className='p-3 col-md-4'>
                    <div className="portfolio-item-transparent rounded-3">
                        <div className="p-3">
                            <h3>Some of my work.</h3>
                        </div>
                        <img className="w-100 rounded-3" src="3A5A7742.JPG" alt="Art"></img>
                    </div>  
                </div>
                
                <div className='p-3 col-md-4'>
                    <div className="portfolio-item-transparent rounded-3">
                     <img className="w-100 rounded-3" src="_D0A9534.JPG" alt="Art"></img>
                    </div>  
                </div>
                 */}
                
                {/*<div className="p-3 col-md-4">
                    <div className="trex portfolio-item-transparent rounded-3">
                            <div className="p-3">
                                <h3>Plants & Prehistoric</h3>
                                <p>A bit of life and death.</p>
                            </div>
                            <video id="art-trex-video" className="w-100 rounded-3" src="art-trex.mp4" onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()} controls muted loop></video>
                        </div>
                </div>
                <div className="p-3 col-md-4">
                    <div className="orbs portfolio-item-transparent rounded-3">
                            <div className="p-3">
                                <h3>Orbs & Discs</h3>
                                <p>A menagerie on display.</p>
                            </div>
                            <video id="art-orb-video" className="w-100 rounded-3" src="art-orbs.mp4" onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()} controls muted loop></video>
                        </div>
                </div> */}
            </div>
        </Parallax>
    )
}

export default Art;