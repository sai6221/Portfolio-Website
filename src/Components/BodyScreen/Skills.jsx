import React from 'react'
import Skillcomponent from './skillcomponent'
import '/src/css/skillsScreen.css'


function Skills() {
  return (
    <div className='skillsContainer'>
        <h1 className='skills-heading'>Skills</h1>

        <div className='skills'>
      <Skillcomponent imageUrl="\Me.jpg" name="Saieswar Reddy "></Skillcomponent>
      </div>
    </div>
  )
}

export default Skills