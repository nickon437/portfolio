import React from 'react';
import { useParams } from "react-router-dom";
import ProjectData from '../resources/data/ProjectsData';

const ProjectDetail = (props) => {
    const { projectname } = useParams();
    const project = ProjectData.DATA.find((record) => record.id === projectname);

    const techStack = project.techStack.map((tech) => (
        <li data-name={tech.name}><img src={tech.logo} alt={tech.alt} /></li>
    ));

    return (
        <div className="body-content">
            <h1>{project.title}</h1>
            <div className="project-detail-snippet">{project.snippet}</div>
            <div>{project.description}</div>
            <div style={{ display: !project.keyFeatures && "none" }}>
                <h2>Key features:</h2>
                <ol>
                    { project.keyFeatures && project.keyFeatures.map((feature) => (<li>{feature}</li>)) }
                </ol>
            </div>
            <div>
                <h2>Technologies:</h2>
                <ul className="tech-stack horizontal-list">{techStack}</ul>
            </div>
            <div style={{ display: !project.demo && "none" }}>
                <h2>Demo:</h2>
                <ul className="demo-list">
                    { project.demo && project.demo.map((illustration) => (
                        <li data-name={illustration.name} className="demo-item"><img src={illustration.gif} alt={illustration.alt}/></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProjectDetail