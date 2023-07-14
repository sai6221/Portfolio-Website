import React from 'react'
import '/src/css/resumeScreen.css'

function Resume() {
  return (
    <div className='resumeContainer'>
        <div className='resume-heading'>Resume</div>
        <div className='resume-container'><embed
        src="/Resume.pdf"
        type="application/pdf"
        className="resume-preview"
        sandbox=""
      /></div>
        </div>
  )
}

export default Resume