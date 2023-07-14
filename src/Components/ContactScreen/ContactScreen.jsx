import React from 'react'
import '/src/css/contactScreen.css'

function ContactScreen() {
  return (
    <div className='contactContainer'>
        <div className='contact-heading'>Contact Me</div>
        <div className="form-container">
        <form>
          <div className="form-group">
            <input type="text" placeholder="Name" className="form-input" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" className="form-input" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Subject" className="form-input" />
          </div>
          <div className="form-group">
            <textarea placeholder="Message" className="form-input" />
          </div>
          <button type="submit" className="form-button">Submit</button>
        </form>
      </div>
        </div>
  )
}

export default ContactScreen