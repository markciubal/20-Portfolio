import { React, useEffect, useState, useRef } from 'react';
import '../App.css';
import PageHeader from './PageHeader';

function Contact() {
    function checkEmailValidity(event) {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let emailInput = document.getElementById('email').value;
        let emailInputError = document.getElementById('email-input-error');
        let isValid = String(emailInput)
        .toLowerCase()
        .match(regex);
        console.log(isValid);
        if (!isValid) {
            emailInputError.innerHTML = '<p class="red-text">Please enter a valid email address.</p>';
        } else if (isValid) {
            emailInputError.innerHTML = '';
        }
      }
    return (
        <>
            <PageHeader title="Contact" />
            <div id="contact" className="row h-100 p-2 g-col-6">
                {/* <div class="row justify-content-center">
                    <div class="col-6">
                        <form>
                            <p>What should I call you?</p>
                            <input required className="m-2 p-2 w-100 mx-auto rounded-2" type="text" id="name"></input>
                            <p>How can I reach you by email?</p>
                            <input required className="m-2 p-2 w-100 mx-auto rounded-2" onChange={checkEmailValidity} onBlur={checkEmailValidity} type="text" id="email"></input>
                            <div id="email-input-error">

                            </div>
                            <p>What do you want to say?</p>
                            <textarea required className="m-2 p-2 w-100 mx-auto rounded-2" type="text" id="message"></textarea>
                            <button className="m-2 p-2 w-100 mx-auto btn rounded-2" type="submit" onClick={(e) => {e.preventDefault()}} id="submit">Submit</button  >
                        </form>
                    </div>
                </div> */}
                <div className="row align-items-center">
                    <div className="col text-center align-items-center">
                        {/* <hr></hr>
                        <p>or</p>
                        <hr></hr> */}
                        <a href="mailto:i@markciubal.com?subject=I saw your website!&body=Hi there, I'd like to contact you about something I saw on your website." >
                            <button className="email-button btn btn-outline-light" type="button">📨 i@markciubal.com</button>
                        </a>                        
                       <a className="socialIcon" href="https://github.com/markciubal" target="_blank" rel="noreferrer">
                            <svg height="24" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
                                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                            </svg>
                        </a>
                        <a className="socialIcon" href="https://flickr.com/photos/194032028@N06/" target="_blank" rel="noreferrer">
                            <svg fill="#000000" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455" xmlSpace="preserve">
                                    <path d="M0,0v455h455V0H0z M140.599,297.5C101.601,297.5,70,266.158,70,227.517 c0-38.675,31.601-70.018,70.599-70.018c38.981,0,70.582,31.343,70.582,70.018C211.181,266.158,179.581,297.5,140.599,297.5z M314.401,297.5c-38.981,0-70.582-31.343-70.582-69.983c0-38.675,31.601-70.018,70.582-70.018c38.999,0,70.599,31.343,70.599,70.018 C385,266.158,353.399,297.5,314.401,297.5z"/>
                            </svg>
                        </a>
                        <a className="socialIcon" href="https://www.linkedin.com/in/markciubal/" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                            </svg>
                        </a>     
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;