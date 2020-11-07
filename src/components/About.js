import React from 'react'
import Icons from '../resources/values/Icons';

const About = () => {
    const toolData = [
        Icons.java,
        Icons.sceneBuilder,
        Icons.javascript,
        Icons.nodeJS, 
        Icons.reactJS, 
        Icons.antlr, 
        Icons.junit, 
        Icons.jest, 
        Icons.seleniumWebDriver, 
        Icons.mySQL, 
        Icons.appEngine, 
        Icons.git,
        Icons.unity,
    ];

    const toolList = toolData.map((tool) => (
        <li data-name={tool.name}><img src={tool.logo} alt={tool.alt} data-tooltip="abx"/></li>
    )); 

    return (
        <div id="about" className="body-content">
            <h1>ABOUT ME</h1>
            <div className="page-content">A software engineer who loves to collab and build intuitive, maintainable and scalable applications. I have experienced in working in Agile environment with an emphasis on utilizing best practices to create software that meets requirements and schedule.</div>
            <a href="../assets/docs/Resume.pdf" className="std-btn" download>DOWNLOAD RESUME</a>
            <h2>TECHNOLOGIES I WORK WITH</h2>
            <ul className="tech-stack horizontal-list">{toolList}</ul>
        </div>
    )
}

export default About
