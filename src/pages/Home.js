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
            <p>Welcome to my website, I'm currently looking for a job, so someone out there please hire me </p>
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
            <div>
                <h2>Skills</h2>
                <div className='front-end'>
                    <h3>Front End</h3>
                    <div className='skills'> 
                        <div className='skill'>
                            <img src="https://i.imgur.com/ulidajD.png" alt='html' width='100' height = '100'/>
                            <p>HTML 5</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/peYXYXi.png" alt='css' width='100' height = '100'/>
                            <p>CSS</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/ittNoCn.png" alt='javascript' width='100' height = '100'/>
                            <p>JavaScript</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/lFHWgeD.png" alt='sass' width='100' height = '100'/>
                            <p>SASS/SCSS</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/CXDcd4p.png" alt='react' width='100' height = '100'/>
                            <p>React</p>
                        </div>
                    </div>
                </div>
                <div className='front-end'>
                    <h3>Back End</h3>
                    <div className='skills'> 
                        <div className='skill'>
                            <img src="https://i.imgur.com/ejfmv2Q.png" alt='html' width='100' height = '100'/>
                            <p>Python</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/K4bwXyI.png" alt='css' width='100' height = '100'/>
                            <p>Django</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/5Q9S7nG.png" alt='javascript' width='100' height = '100'/>
                            <p>Node.js</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/MZuGZtk.png" alt='sass' width='100' height = '100'/>
                            <p>Express</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/5CBb4GR.png" alt='react' width='100' height = '100'/>
                            <p>PostgreSQL</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/qbOs26t.png" alt='react' width='100' height = '100'/>
                            <p>REST Framework</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/IH2sINj.png" alt='react' width='100' height = '100'/>
                            <p>AJAX</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/ejfmv2Q.png" alt='react' width='100' height = '100'/>
                            <p>Cryptography.py</p>
                        </div>
                    </div>
                </div>
                <div className='front-end'>
                    <h3>Organisational</h3>
                    <div className='skills'> 
                        <div className='skill'>
                            <img src="https://i.imgur.com/hJS7f1l.png" alt='html' width='100' height = '100'/>
                            <p>GitHub</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/6I5pn4C.png" alt='css' width='100' height = '100'/>
                            <p>Git</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/OrGPHCV.png" alt='javascript' width='100' height = '100'/>
                            <p>Yarn</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/R6QnjMG.png" alt='sass' width='100' height = '100'/>
                            <p>npm</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/vH7bjCJ.png" alt='react' width='100' height = '100'/>
                            <p>Insomnia</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/CXDcd4p.png" alt='react' width='100' height = '100'/>
                            <p>Postman</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/6MlDPnk.png" alt='react' width='100' height = '100'/>
                            <p>Heroku</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/bH8WqYy.png" alt='react' width='100' height = '100'/>
                            <p>Netlify</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/1iLmBp1.png" alt='react' width='100' height = '100'/>
                            <p>Slack</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/iTLfFPF.png" alt='react' width='100' height = '100'/>
                            <p>Trello</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
  }
  
  export default Home