import React from 'react';
import ProjectData from '../resources/data/ProjectsData';
import Thumbnail from './Thumbnail';

const Projects = () => {

    const thumbnailList = ProjectData.DATA.map((thumbnail) => (
        <li>
            <Thumbnail
                id={thumbnail.id}
                title={thumbnail.title}
                snippet={thumbnail.snippet}
            />
        </li>
    ));

    return (
        <div id="projects" className="body-content">
            <h1>PROJECTS</h1>
            <ul>
                {thumbnailList}
            </ul>
        </div>
    )
}

export default Projects;
