import React from 'react';
import { NavLink } from "react-router-dom";

const Thumbnail = (
    props
    // title, 
    // snippet,
    // description,
    // keyFeatures,
    // demo,
    // techStack,
    // site,
    // source,
) => {
    const projectPath = props.title.replace(/\r|\n|.| /g, '');

    return (
        <div className="thumbnail">
            <div className="thumbnail-title">{props.title}</div>
            <div className="thumbnail-description">
                <div>{props.snippet}</div>
                <NavLink 
                    className="link"
                    to={`/projects/${projectPath}`}
                    projectInfo={props}
                >
                    {'Find more >>'}
                </NavLink>
            </div>
        </div>
    )
}

Thumbnail.propTypes = {

}

export default Thumbnail;
