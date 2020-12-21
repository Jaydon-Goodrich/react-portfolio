import React from 'react';
import resume from '../assests/myresume.pdf';

function Resume(){
    return(
        <>
            <h1>Resume</h1>
            <div className="resume-div">
                <h3>Click <a href={resume}>Here</a> For My Resume</h3>
                <h3>Front-end Proficiencies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>ReactJS</li>
                    <li>HandlebarsJs</li>
                    <li>Bootstrap</li>
                </ul>
                <h3>Back-end Proficiencies</h3>
                <ul>
                    <li>REST API</li>
                    <li>NodeJs</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                </ul>
            </div>
        </>
    );
}

export default Resume;