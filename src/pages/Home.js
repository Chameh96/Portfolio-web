import React from 'react'
import Nav from '../components/Nav'
import {
    FaInstagram,
    FaGithub,
    FaLinkedin
  } from 'react-icons/fa'

const Home = () => {
    return (
        <>
        <header>
            <Nav />
        </header>
        <main>
        
            <h1>Ed Chamberlain</h1>
            <p>Junior Software Engineer</p>
            <img src="https://i.imgur.com/HMpkjmh.jpg" height="200" width="200" alt={'EdC'}/>
            <div className='social-icons'>
                <div className='social'>
                <a
                    href='https://www.linkedin.com/in/edward-chamberlain-8ab05414b/'
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaLinkedin />  
                </a>
                <a
                    href='https://www.instagram.com/chameh96/?hl=en'
                    target='_blank'
                    rel='noreferrer'
                >
                <FaInstagram />
                </a>
                <a
                    href='https://github.com/Chameh96'
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
  
  export default Home