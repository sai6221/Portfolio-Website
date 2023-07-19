import React from 'react'
import '/src/css/projectsScreen.css'
import ProjectComponent from './ProjectComponent'

function Projects() {
  return (
    <div className='projectsContainer' id='projectsContainer'>
        <h1 className='projects-heading'>Projects</h1>
        <div className='projects'>
        <ProjectComponent imageUrl="Python.png" name="Python"></ProjectComponent>
      </div>
    </div>
  )
}

export default Projects