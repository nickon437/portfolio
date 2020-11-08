import React, { useRef, useEffect } from 'react';
import { NavLink, useRouteMatch } from "react-router-dom";

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
    const findMoreBtnRef = useRef(null);
    const titleRef = useRef(null);
    const { url, path } = useRouteMatch();

    useEffect(() => {
        findMoreBtnRef.current.onmouseenter = () => {
            titleRef.current.style.backgroundColor = '#ffda0a';
            titleRef.current.style.color = 'black';
        };
        
        findMoreBtnRef.current.onmouseleave = () => {
            titleRef.current.style.backgroundColor = '';
            titleRef.current.style.color = 'white';
        }

        // console.log(props.title);
        // console.log(props.title.replace(/ |\./g, ''));
        // console.log(projectPath);
    }, [findMoreBtnRef]);
    
    return (
        <div className="thumbnail">
            <div ref={titleRef} className="thumbnail-title">{props.title}</div>
            <div className="thumbnail-description">
                <div>{props.snippet}</div>
                <NavLink 
                    ref={findMoreBtnRef}
                    className="link"
                    to={{
                        pathname: url + '/' + props.id,
                        projectDetails: {props},
                    }}
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
