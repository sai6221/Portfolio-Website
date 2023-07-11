import React from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import '/src/css/introBody.css'



function IntroBody() {

    const [typeWords] = useTypewriter({ words: ["Saieswar Reddy Vaka", "a Machine Learning Enthusiast","a Software Developer", "an Open Source Contributor"], loop: {}, typeSpeed: 50, deleteSpeed: 50, });
  return (
    <div className="introBodyContainer"><div className="portfolio">
    <text className="portfolio-title">Hi There!</text>
    <text className="portfolio-subtitle">I'm <span className = "portfolio-subsubtitle">{typeWords}</span><Cursor></Cursor></text>
    <text className="portfolio-title">based in San Jose, California. <br></br>saieswarreddy.vaka@sjsu.edu</text>
  </div>
  <div className="imageContainer">
  <div className="column mt-6">
          <img
            className="image has-image-centered vert-move mt-4"
            src="/Me.jpg"
          />
    </div>      
</div>
  <div className="arrowContainer" >
        <a href="#features"
          ><i
            class="fa-solid fa-circle-chevron-down fa-lg vert-move2 has-text-white"
          ></i
        ></a>
      </div>
    </div>
  )
}

export default IntroBody