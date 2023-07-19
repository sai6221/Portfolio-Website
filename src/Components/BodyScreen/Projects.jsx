import React from 'react'
import '/src/css/projectsScreen.css'
import ProjectComponent from './ProjectComponent'

function Projects() {
  return (
    <div className='projectsContainer' id='projectsContainer'>
        <h1 className='projects-heading'>Projects</h1>
        <div className='projects'>
        <ProjectComponent title="Fake Malware Generation using GAN’s" skills="PyTorch, Python" description="Implemented generative adversarial networks (GANS) to generate adversarial malware samples as DLLs/API calls to
differentiate between fake and benign samples."></ProjectComponent>

<ProjectComponent title="BirdCall Identification" skills ="TensorFlow, Sci-kit, Keras, Python" description="Executed a robust solution to identify and extract useful features of birds’ voices from natural soundscapes using Short- time
Fourier transform and Mel Frequency graphs as pre-processing techniques to classify them based on their species."></ProjectComponent>

<ProjectComponent title="Peek ’N’ Shop" skills="JavaScript, Angular, MUI, Go" description="Pioneered a website for students at University of Florida to find affordable places and deals in and around campus leveraging
Angular, JS and bootstrap framework devised using Figma."></ProjectComponent>
{/* <ProjectComponent title="Fake Malware Generation using GAN’s" description="Implemented generative adversarial networks (GANS) to generate adversarial malware samples as DLLs/API calls to
differentiate between fake and benign samples."></ProjectComponent>
<ProjectComponent title="BirdCall Identification" description="Implemented generative adversarial networks (GANS) to generate adversarial malware samples as DLLs/API calls to
differentiate between fake and benign samples."></ProjectComponent> */}
      </div>
    </div>
  )
}

export default Projects