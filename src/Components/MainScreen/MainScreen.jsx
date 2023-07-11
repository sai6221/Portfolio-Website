import React from 'react'
import Navbar from './Navbar'
import IntroBody from './Navbar'
import FooterBody from './FooterBody'

function MainScreen() {
  return (
    <section>
        <Navbar></Navbar>
        <IntroBody></IntroBody>
        <FooterBody></FooterBody>
    </section>
  )
}

export default MainScreen