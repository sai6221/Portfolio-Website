import React from 'react'
import Navbar from './Navbar'
import IntroBody from './IntroBody'
import FooterBody from './FooterBody'
import '/src/css/Navbar.css';
import '/src/css/MainScreen.css';
import '/src/css/introBody.css';

function MainScreen() {
  return (
    <section className = "mainScreenSection">
        <Navbar></Navbar>
        <IntroBody></IntroBody>
        <FooterBody></FooterBody>
    </section>
  )
}

export default MainScreen