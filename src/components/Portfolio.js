import React from 'react';
import rocket from '../assests/rocket.png';
import github from '../assests/github111.png';

//Portfolio component
function Portfolio(props){
    const { projects = [] } = props;
    return (
        <>
            <h1>Portfolio</h1>
            {projects.map((project) => (
                <div className="card">
                    <img src={require(`../assests/0${project.id}.jpg`).default} alt="a cover of the project" className="big-img"/>
                    <div class="container">
                    <h3>{project.title}</h3>
                    <div className="img-container">
                    <a href={project.dUrl}><img src={rocket} alt="deployed icon" className="link-icon"/></a>
                    <a href={project.url}><img src={github} alt="github logo icon" className="link-icon"/></a>
                    </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Portfolio;