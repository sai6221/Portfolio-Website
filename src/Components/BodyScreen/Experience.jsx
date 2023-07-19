import React from 'react'
import '/src/css/experienceScreen.css'
import Experiencecomponent from './Experiencecomponent'

function Experience() {
  return (
    <div className='experienceContainer' id='experienceContainer'>
        <h1 className='experience-heading'>Experience</h1>
        <div className='experience'>
          <Experiencecomponent></Experiencecomponent>
      </div>
    </div>
  )
}

export default Experience