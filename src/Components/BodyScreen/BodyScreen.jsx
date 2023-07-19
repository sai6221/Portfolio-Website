import React from 'react'
import Description from './Description'
import Skills from './Skills'
import Resume from './Resume'
import Projects from './Projects'
import Experience from './Experience'
import '/src/css/bodyScreen.css'


function BodyScreen() {
  return (
    <section className = "bodyScreenSection">
    <div className="torch-light-gradient">
    <Description></Description>
    <Skills ></Skills>
    <Experience></Experience>
    <Projects></Projects>
    <Resume></Resume>
    </div>
</section>
  )
}

export default BodyScreen