import React from 'react'
import '/src/css/projectsScreen.css'

function ProjectComponent({ title, skills, description }) {
    return (
        <div className="project-component">
      <div className="project-content">
        <div className="project-title">{title}</div>
        <div className="project-Skills">{skills}</div>
        <div className="project-description">{description}</div>
      </div>
    </div>
      );
}

export default ProjectComponent