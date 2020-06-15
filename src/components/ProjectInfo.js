import React from 'react';
import Navbar from './navbar' 


const ProjectInfo = (props) => {
    return (
        <div class=" project-info-container">
            <Navbar />
            {props.renderProjectInfo()}
        </div>
    )
}

export default ProjectInfo

