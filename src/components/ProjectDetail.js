import React, { useRef } from 'react'

const ProjectDetail = (props) => {
    // const projectDetails = useRef(props.location.projectDetails.props);
    const projectDetails = props.location.projectDetails.props;
    console.log('props.loc.pjDetal', props.location.projectDetails.props);
    // console.log('projectDetails', projectDetails.current);
    console.log('projectDetails', projectDetails);
    return (
        <div>
            <h1>abc</h1>
        </div>
    )
}

export default ProjectDetail
