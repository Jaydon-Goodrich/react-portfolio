import React from 'react';
import aboutImg from '../assests/proPic1.png';

function About() {
    return (
        <>
            <h1>About Me</h1>
            <div>
                <img src={aboutImg} alt="Profile for Me" className="about-img"/>
                <p className="about-text">
                    I am a full stack developer currently based out of Orem, Utah. <br/>
                    I my free time I enjoy climbing, watching and playing sports, and spending time with my wife.<br/>
                    I have been doing web development for 1 year.<br/>
                    I am skilled in the following: HTML, CSS, JavaScript, BootStrap, NodeJs, ExpressJs, MySQL, Sequelize, HandlebarsJs, MongoDB, and ReactJs
                </p>
                
            </div>
        </>
    );
}

export default About;