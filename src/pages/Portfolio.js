import React from 'react'
import Nav from '../components/Nav'
import {
    FaGithub
  } from 'react-icons/fa'

const Portfolio = () => {
    return (
        <>
        <header>
            <Nav />
        </header>
        <main>
            <h1>Portfolio</h1>
            <h3>What I'm working on currently</h3>
            <p>I am currently working with three others from the General Assembly Immersive Software Engineering course to create a one-stop place for teachers, students and governing bodies. So the teachers can set, grade and feedback on homework, students can recieve, complete and submit work, and the governing bodies can see big picture reports on how much homework is given and overall grade performances etc.</p>
            <h3>Previous work</h3>
            <h4>aioli</h4>
            <img src="https://i.imgur.com/jGsYfTG.png" height="500" width="800" alt={'EdC'}/>
            <div className='social-icons'>
                <div className='social'>
                <a
                    href='https://github.com/Chameh96/Project-3'
                    target='_blank'
                    rel='noreferrer'
                >
                <FaGithub />
                </a>
                
                </div>
            </div>
        </main>
        </>
    )
  }
  
  export default Portfolio