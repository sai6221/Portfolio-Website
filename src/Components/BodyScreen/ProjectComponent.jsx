import React from 'react'
import '/src/css/projectsScreen.css'

function ProjectComponent({ imageUrl, name }) {
    return (
        <div className="project-component">
          <div className="project-image">
            <img src={imageUrl} alt={name} />
          </div>
          <div className="project-name">{name}</div>
        </div>
      );
}

export default ProjectComponent