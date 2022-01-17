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
            <div className='top-portfolio'>
            <h3>What I'm working on currently</h3>
            <p>I am currently working with three others from the General Assembly Immersive Software Engineering course to create a one-stop place for teachers, students and governing bodies. So the teachers can set, grade and feedback on homework, students can receive, complete and submit work, and the governing bodies can see big picture reports on how much homework is given and overall grade performances etc.</p>
            <h3>Previous work</h3>
            <p>Click on the GitHub logos to view each project repository and on the name to see the deployed project.</p>
            </div>
            <div className='port-div'> 
                <div className='title-div'>
                    <h4><a href="https://aioli-app.herokuapp.com/recipes" target='blank' rel='noreferrer'>aioli</a></h4>
                    <a
                            href='https://github.com/Chameh96/Project-3'
                            target='_blank'
                            rel='noreferrer'
                        >
                        <FaGithub />
                    </a>
                </div>
                <div className='port-layout'> 
                    <ul>
                        <li>Group project in teams of three.</li>
                        <li>We had 9 days to create a full MERN Stack application with CRUD capabilities.</li>
                        <li>Our idea was a recipe website, where you can add and save recipes to your profile.</li>
                        <li>Working across both front and back end to create one of the 'best designed projects' our instructor had seen.</li>
                        <li>View <a href="https://aioli-app.herokuapp.com/recipes" target='blank' rel='noreferrer'>aioli.</a></li>
                    </ul>
                    <div className='git-icon'>
                        <div className='git'>
                            <img src="https://i.imgur.com/jGsYfTG.png" height="400" width="600" alt={'aioli'}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='port-div'> 
                <div className='title-div'>
                    <h4>Ed-crypt</h4>
                    <a
                                href='https://github.com/Chameh96/Project-4'
                                target='_blank'
                                rel='noreferrer'
                            >
                            <FaGithub />
                            </a>
                </div>
                    <div className='port-layout'>
                        <ul>
                            <li>Final solo project.</li>
                            <li>We had 9 days to create a full stack application using Python and Django.</li>
                            <li>I wanted to try something new and learn how to encrypt and decrypt using Cryptography.py.</li>
                            <li>Learning to read the Documentation was a useful skill to pick up from this project.</li>
                            <li>Due to the nature of the data Ed-crypt would store I took the decision to not deploy it, but you can view the code by clicking the GitHub logo above.</li>
                        </ul>
                        <div className='git-icon'>
                            <div className='git'>
                                <img src="https://i.imgur.com/l43cC3x.jpg" height="300" width="600" alt={'edcrypt'}/>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='port-div'>
                <div className='title-div'> 
                    <h4><a href="https://space-page.netlify.app/" target='blank' rel='noreferrer'>Space-Page</a></h4>
                    <a
                            href='https://github.com/Chameh96/Project-2'
                            target='_blank'
                            rel='noreferrer'
                        >
                        <FaGithub />
                    </a>
                </div>
                <div className='port-layout'>
                    <ul>
                        <li>Group project in a team of two.</li>
                        <li>We had 2 days to create a React front end application utilising a public API.</li>
                        <li>My teammate wanted to go for something space themed so we used three different API's to create a one stop place for space news.</li>
                        <li>View <a href="https://space-page.netlify.app/" target='blank' rel='noreferrer'>Space Page.</a></li>
                    </ul>
                    <div className='git-icon'>
                        <div className='git'>
                            <img src="https://i.imgur.com/2eLnEPM.jpg" height="300" width="600" alt={'space'}/>
                        </div> 
                    </div>
                </div>
            </div>
            <div className='port-div'> 
                <div className='title-div'> 
                    <h4><a href="https://chameh96.github.io/Battleships/" target='blank' rel='noreferrer'>Battleships OG</a></h4>
                    <a
                            href='https://github.com/Chameh96/Battleships'
                            target='_blank'
                            rel='noreferrer'
                        >
                        <FaGithub />
                    </a>
                </div>
                <div className='port-layout'>
                    <ul>
                        <li>Solo project to create a game in nine days.</li>
                        <li>Using vanilla JavaScript we had to create a grid-based game.</li>
                        <li>The game must used HTML, CSS and JavaScript.</li>
                        <li>The player had to be able to play against a computer.</li>
                        <li>I wanted the game to be as close to the original as possible with my own twist in there.</li>
                        <li>View <a href="https://chameh96.github.io/Battleships/" target='blank' rel='noreferrer'>Battleships OG.</a></li>
                    </ul>
                    <div className='git-icon'>
                        <div className='git'>
                            <img src="https://i.imgur.com/H6uRgXs.jpg" height="300" width="600" alt={'battleships'}/>
                        </div> 
                    </div>
                </div>
            </div>
        </main>
        </>
    )
  }
  
  export default Portfolio