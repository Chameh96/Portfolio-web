import React from 'react'
import Nav from '../components/Nav'
import {
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
            <div className='top-content'>
            <img src="https://i.imgur.com/HMpkjmh.jpg" height="200" width="200" alt={'EdC'}/>
            <div className='right-top'> 
            <h1>Ed Chamberlain</h1>
            <p>Junior Software Engineer</p>
            <p className='blurb'>I’m a Software Engineer with experience in Advertising, Marketing, Strategy and Real Estate. Having thought of coding for a while I did a one day course in Python and immediately fell in love with not only the creativity and logic, but also the multiple routes you can take to solve problems and enrolled in General Assembly’s Software Engineering course. </p>
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
                    href='https://github.com/Chameh96'
                    target='_blank'
                    rel='noreferrer'
                >
                <FaGithub />
                </a>
                
                </div>
            </div>
            </div>
            </div>
            <div className='skill-icons'>
                <h2>Skills</h2>
                <div className='front-end'>
                    <h3>Front End</h3>
                    <div className='skills'> 
                        <div className='skill'>
                            <img src="https://i.imgur.com/ulidajD.png" alt='html' height = '100'/>
                            <p>HTML 5</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/peYXYXi.png" alt='css' height = '100'/>
                            <p>CSS</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/ittNoCn.png" alt='javascript' height = '100'/>
                            <p>JavaScript</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/lFHWgeD.png" alt='sass' height = '100'/>
                            <p>SASS/SCSS</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/CXDcd4p.png" alt='react' height = '100'/>
                            <p>React</p>
                        </div>
                    </div>
                </div>
                <div className='back-end'>
                    <h3>Back End</h3>
                    <div className='skills'> 
                        <div className='skill'>
                            <img src="https://i.imgur.com/ejfmv2Q.png" alt='python' height = '100'/>
                            <p>Python</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/K4bwXyI.png" alt='django' height = '100'/>
                            <p>Django</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/5Q9S7nG.png" alt='node' height = '100'/>
                            <p>Node.js</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/MZuGZtk.png" alt='express' height = '100'/>
                            <p>Express</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/5CBb4GR.png" alt='postgresql' height = '100'/>
                            <p>PostgreSQL</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/qbOs26t.png" alt='rest' height = '100'/>
                            <p>REST Framework</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/IH2sINj.png" alt='ajax' height = '100'/>
                            <p>AJAX</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/ejfmv2Q.png" alt='crypto' height = '100'/>
                            <p>Cryptography.py</p>
                        </div>
                    </div>
                </div>
                <div className='organisational'>
                    <h3>Organisational</h3>
                    <div className='skills'> 
                        <div className='skill'>
                            <img src="https://i.imgur.com/hJS7f1l.png" alt='github'  height = '100'/>
                            <p>GitHub</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/6I5pn4C.png" alt='git' height = '100'/>
                            <p>Git</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/OrGPHCV.png" alt='yarn' height = '100'/>
                            <p>Yarn</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/R6QnjMG.png" alt='sass' height = '100'/>
                            <p>npm</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/vH7bjCJ.png" alt='insomnia' height = '100'/>
                            <p>Insomnia</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/CXDcd4p.png" alt='postman' height = '100'/>
                            <p>Postman</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/6MlDPnk.png" alt='heroku' height = '100'/>
                            <p>Heroku</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/bH8WqYy.png" alt='netlify' height = '100'/>
                            <p>Netlify</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/1iLmBp1.png" alt='slack' height = '100'/>
                            <p>Slack</p>
                        </div>
                        <div className='skill'>
                            <img src="https://i.imgur.com/iTLfFPF.png" alt='trello' height = '100'/>
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