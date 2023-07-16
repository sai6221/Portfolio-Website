import React from 'react'
import '/src/css/descriptionScreen.css'

function Description() {
  const handleDownloadResume = () => {
    // Replace the file URL with the actual URL of the PDF file
    const fileUrl = '/Resume.pdf';

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = fileUrl;
    // link.target = '_blank';
    link.download = 'Resume.pdf'; // Set the desired file name

    // Programmatically trigger the download
    link.click();
      }
  return (
    <div className='descriptionContainer' id ='descriptionContainer'>
        <button className='buttonResume' onClick={handleDownloadResume}>Download Resume<i class="downloadButton fa-solid fa-download"></i></button>
        <p className='descriptionContent'>
        Hey there! I am Saieswar Reddy Vaka (a.k.a Sai) and I am an MS CS student at San Jose State University. Being Machine Learning Enthusiast, I would love to contribute to products that touch millions of people around the globe. Exploring open source has completely evloved me into a better developer with hands on experience on current technologies. In the past, I worked as an iOS developer and a Machine Learning Engineer at a very fast paced start ups. Feel free to reach out if you like what you see, are working on interesting projects, or just wanna say hi!</p>
    </div>
  )
}


export default Description