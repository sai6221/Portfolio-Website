import React from 'react'
import Skillcomponent from './Skillcomponent'
import '/src/css/skillsScreen.css'


function Skills() {
  return (
    <div className='skillsContainer' id='skillsContainer'>
        <h1 className='skills-heading'>Skills</h1>

        <div className='skills'>
        <Skillcomponent imageUrl="Python.png" name="Python"></Skillcomponent>
        <Skillcomponent imageUrl="Pytorch.png" name="Pytorch"></Skillcomponent>
        <Skillcomponent imageUrl="Tensorflow.png" name="Tensorflow"></Skillcomponent>
        <Skillcomponent imageUrl="Sql.png" name="Sql"></Skillcomponent>
        <Skillcomponent imageUrl="Scikit.png" name="Scikit"></Skillcomponent>
        <Skillcomponent imageUrl="Go.png" name="Go"></Skillcomponent>
        <Skillcomponent imageUrl="Rest.png" name="REST API"></Skillcomponent>
        <Skillcomponent imageUrl="JavaScript.png" name="JavaScript"></Skillcomponent>
        <Skillcomponent imageUrl="Java.png" name="Java"></Skillcomponent>
        <Skillcomponent imageUrl="Haskell.png" name="Haskell"></Skillcomponent>
        <Skillcomponent imageUrl="Git.png" name="Git"></Skillcomponent>
        <Skillcomponent imageUrl="React.png" name="ReactJS"></Skillcomponent>
        <Skillcomponent imageUrl="Html_CSS.png" name="Html/CSS"></Skillcomponent>
        <Skillcomponent imageUrl="AWS.png" name="AWS"></Skillcomponent>
      <Skillcomponent imageUrl="Node.png" name="NodeJS"></Skillcomponent>
      <Skillcomponent imageUrl="Angular.svg" name="AngularJS"></Skillcomponent>
      <Skillcomponent imageUrl="Docker.png" name="Docker"></Skillcomponent>
      <Skillcomponent imageUrl="Kubernetes.png" name="Kubernetes"></Skillcomponent>
      <Skillcomponent imageUrl="Figma2.png" name="Figma"></Skillcomponent>
      <Skillcomponent imageUrl="Firebase.png" name="Firebase "></Skillcomponent>
      <Skillcomponent imageUrl="Jira.png" name="Jira"></Skillcomponent>
      <Skillcomponent imageUrl="MongoDB.png" name="MongoDB"></Skillcomponent>
      <Skillcomponent imageUrl="Swift.svg" name="Swift"></Skillcomponent>
      <Skillcomponent imageUrl="Xcode.png" name="Xcode"></Skillcomponent>
      <Skillcomponent imageUrl="Android.png" name="Android"></Skillcomponent>
      <Skillcomponent imageUrl="Postgres.png" name="Postgres"></Skillcomponent>
      </div>
    </div>
  )
}

export default Skills