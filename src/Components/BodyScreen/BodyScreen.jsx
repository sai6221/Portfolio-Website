import React from 'react'
import Description from './Description'
import Skills from './Skills'
import '/src/css/bodyScreen.css'

function BodyScreen() {
  return (
    <section className = "bodyScreenSection">
    <div className="torch-light-gradient">
    <Description></Description>
    <Skills ></Skills>
    {/* <Experience></Experience>
    <Resume></Resume> */}
    </div>
</section>
  )
}

export default BodyScreen