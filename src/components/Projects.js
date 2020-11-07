import React from 'react';
import ProjectData from '../resources/data/ProjectsData';
import Thumbnail from './Thumbnail';

const Projects = () => {

    const thumbnailList = ProjectData.DATA.map((thumbnail) => (
        <li>
            <Thumbnail
                title={thumbnail.title}
                snippet={thumbnail.snippet}
                description={thumbnail.description}
                keyFeatures={thumbnail.keyFeatures}
                demo={thumbnail.demo}
                techStack={thumbnail.techStack}
                site={thumbnail.site}
                source={thumbnail.source}
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

export default Projects
