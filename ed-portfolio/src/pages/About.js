import React from 'react'
import Nav from '../components/Nav'

const About = () => {
    return (
      <section className='about'>
        <header>
            <Nav />
        </header>
        <main>
        <div className='about-text'>
          <h2>About Me</h2>
          <div className='about-seg'>
          <h4>Interests</h4>
          <p>I love all things nature (my idol is Sir David Attenborough), and previously volunteered to help a biological expedition to the cloud rainforest of Honduras where I discovered a new species of Skink. I also love gaming and cooking (I’ve even gone and forged my own chef’s knife) as more normal interests!</p>
          </div>
          <div className='about-seg'>
          <h4>History</h4>
          <p>I have worked in various fields, all of which have taught me valuable lessons. As a waiter, I learned how to work hard, with some shifts being 18hours and putting up with some less than enjoyable customers enforced the ability to turn the other cheek and get on with my job. 
Within the Property Investment world, I learnt to be professional and handle a lot of pressure helping with deals over +£10million. But it also taught me what I want out of a job, and the team I want to be a part of.
Lastly my Advertising strategy job, through this I solidified my time management skills, client management and working as a team having to organise markets across Europe, the Middle-East and Africa to work on regional releases.
          </p>
          </div>
          <div className='about-seg'>
          <h4>Why the career change?</h4>
          <p>I have always been interested in the tech world, specifically in coding and a friend sent me a link to a Saturday free coding course, and I absolutely fell in love with it. The problem solving aspect and the conciseness of the coding world really resonate with me. </p>
          </div>
          <div className='about-seg'>
          <h4>What value can I add?</h4>
          <p>I think quite differently to normal people. When I was younger I went for a dyslexia test and was told I have a “one-in-a-million brain” which means I don’t go about things the same way, so I believe that new perspective will be incredibly useful in this profession. Also I bring a positive outlook, a hard work ethic and a huge willingness to learn.</p>
          </div>
          <div className='about-seg'>
          <h4>What do I want to do next?</h4>
          <p>I want to get a job where I love my team and I’m happy working there. If I was to win the lottery, I don’t think this goal would change, I want to code and I want to be in a company where I’m happy doing that!</p>
          </div>
        </div>
        </main>
      </section>
    )
  }
  
  export default About