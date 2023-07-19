import React from 'react'
import '/src/css/contactScreen.css'

function ContactScreen() {
  return (
    <div className='contactContainer' id ='contactContainer'>
        <div className='contact-heading'>Contact Me</div>
        <div className='reachMsg'>If you like my work and have some cool projects to work on, feel free to reach out or connect with me on social account:</div>
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
      <div className='linksMessage'>You can find links to my GitHub, LinkedIn, and Email:</div>
      <div className="contactIcons">
       <div className="links">
       <a></a>
       <a href="https://github.com/sai6221" className="navbar-item is-tab" target="_blank">
  <i className="fa-brands fa-github"></i>
</a>


        <a href="https://www.linkedin.com/in/saieswar-reddy-vaka-528814173/" className="navbar-item is-tab" target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a href="mailto:saieswarreddy.vaka@sjsu.edu" className="navbar-item is-tab">
          <i className="fa-solid fa-envelope"></i>
        </a>

        <a href="+1-352-740-9880" className="navbar-item is-tab">
          <i className="fa-solid fa-phone"></i>
        </a>
        <a></a>
      </div>
    </div>
    
        </div>
  )
}

export default ContactScreen