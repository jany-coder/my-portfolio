import React from "react";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Typing from 'react-typing-animation';




function HomePage() {
  return ( 
    <div className='HomePage'>
      <header className='hero'>
        <Typing>
          <h1 className='hero-text'>
            Hi, I am
          <span> Md. Azizul Haque</span>
          </h1>
          <Typing.Backspace count={0} />
        </Typing>

        <p className='h-sub-text'>
          Having always had a passion for technology, innovation, and
          creativity, I developed a keen interest in software development. I
          nurtured this interest through self-learning and academic studies to
          pursue a career in web development.
        </p>
        <div className='icons'>
          <a
            className='icon-holder'
            href='https://www.linkedin.com/in/azizul-jany-aa209776/'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faLinkedinIn} className='icon ln' />
          </a>
          <a
            className='icon-holder'
            href='https://github.com/jany-coder'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faGithub} className='icon gh' />
          </a>
          <a href='mailto:jany.java@gmail.com' className='icon-holder'>
            <FontAwesomeIcon icon={faEnvelope} className='icon ml' />
          </a>
        </div>
      </header>
      
    </div>
  );
}

export default HomePage;
