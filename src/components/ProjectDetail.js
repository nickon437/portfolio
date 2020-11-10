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
        <div className="project-detail body-content">
            <h1>{project.title}</h1>
            <div className="page-content project-detail-snippet">{project.snippet}</div>
            <div className="page-content">{project.description}</div>
            <div style={{ display: !project.keyFeatures && "none" }}>
                <h2>Key features:</h2>
                <ol>
                    {project.keyFeatures && project.keyFeatures.map((feature) => (<li>{feature}</li>))}
                </ol>
            </div>
            <div>
                <h2>Technologies:</h2>
                <ul className="tech-stack horizontal-list">{techStack}</ul>
            </div>
            <div style={{ display: !project.demo && "none" }} className="demo">
                <h2>Demo:</h2>
                <ul>
                    {project.demo && project.demo.map((illustration) => (
                        <li data-name={illustration.name}><img src={illustration.src} alt={illustration.alt} /></li>
                    ))}
                </ul>
            </div>
            <div className="hflex">
                <a href={project.site} target="_blank" rel='noreferrer' className="std-btn" style={{ display: !project.site && "none" }}>
                    Visit site
                </a>
                <a href={project.source} target="_blank" rel='noreferrer' className="std-btn" style={{ display: !project.source && "none" }}>
                    Visit source
                </a>
            </div>
        </div>
    )
}

export default ProjectDetail;
