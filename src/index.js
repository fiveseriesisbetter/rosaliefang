import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import './index.css';
import profile from './img/RosalieFang.jpeg';
import background from './img/Background.jpg';

//Side Nav with Resume, Classes, Experience, Skill, AboutMe
class SideBar extends React.Component {
  render() {
    return (
      <div> 
        <div className="side-bar">
          <div className="side-bar-elements">
            <img src={profile} alt="My head pic" className="headshot"/>
          </div>
          <div className="side-bar-elements"><a href="/home">About Me</a></div>
          <div className="side-bar-elements"><a href="/resume">Resume</a></div>
          <div className="side-bar-elements">Contact</div>
        </div>
      </div>
    );
  }
}

class Page extends React.Component {
  render() {
    return (
      <div>
        <SideBar />
        <Home />
        <Resume />
        <Contact />
      </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="home" style={{backgroundImage: `url(${background})`}}>
          <h1>Hello World!</h1>
          <h4>
            Welcome to my page! 
            My name is Rosalie Fang, 
            I am a 3rd year student studying computer science and economics at the University of California, Berkeley. 
            <br></br>
            <br></br>
            Connect with me in any way you find comfortable!
          </h4>
        </div>
      </div>
      
    );
  }
}

class Resume extends React.Component {
  render() {
    return (
      <div>
        <div className="resume">
          <h2>Resume</h2>
          <h3>Education</h3>
          <p className="name"><b>University of California, Berkeley</b></p>
          <p>Graduation: May 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GPA: 3.92</p>
          <p><i><u>Bachelor of Arts in Computer Science</u></i> </p>
          <p>
            <ul>
              <li>CS61B Data Structures</li>
              <li>CS61C Computer Architecture</li>
              <li>CS170 Computer Algorithms</li>
              <li>CS186 Database Management</li>
              <li>CS188 Artificial Intelligence</li>
            </ul>
          </p>
          <p><i><u>Bachelor of Arts in Economics</u></i></p>
          <p>
            <ul>
              <li>Econ100A Microeconomics</li>
              <li>UGBA101B Macroeconomics</li>
              <li>Econ140 Econometrics</li>
            </ul>
          </p>

          <h3>Experience</h3>
          <p className="name"><b>CS61C Tutor</b></p>
          <p>
            <u>Academic Student Employment</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <i>2021.1 - Now</i>
          </p>
          <p>
            <ul>
              <li>Held project office hours for computer science class (Machine structures)</li>
              <li>Monitored chats for review sessions</li>
            </ul>
          </p>
          <p className="name"><b>Economic Research Assistant</b></p>
          <p>
            <u>UC Berkeley Department of Agricultural and Resource Economics</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <i>2021.1 - Now</i>
          </p>
          <p>
            <ul>
              <li>Performed literature reviews on China’s wage inequality and gentrification</li>
              <li>Combined time series datasets and manipulated it into fit form for mincer equations</li>
              <li>Ran regressions in R for tables with 50,000+ entries</li>
            </ul>
          </p>
          <p className="name"><b>Senior Mentor</b></p>
          <p>
            <u>Computer Science Mentors</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <i>2020.9 - Now</i>
          </p>
          <p>
            <ul>
              <li>Held 1-to-6 small group tutoring sections for CS70 (Discrete Math and Probability), for 3 hours every week</li>
              <li>Guided junior mentors with teaching</li>
              <li>Held review sessions for classes with 800+ students</li>
            </ul>
          </p>

          <h3>Skill</h3>
          <p>Proficient: Python, Java, C, RISC-V Assembly language, R, SQL, HTML, CSS</p>
          <p>Experienced: MongoDB, ReactJS, Matlab</p>
        </div>
      </div>
    );
  }
}

class Contact extends React.Component {
  render() {
    return (
      <div>
        <div className="bottom-bar">
          <h2>Contact me!</h2>
          <p>Email: fyr2019@berkeley.edu</p>
          <p><a href="https://www.linkedin.com/in/rosalie-fang-a93b88174/">LinkedIn</a></p>
        </div>
      </div>
    );
  }
}

/*
class Square extends React.Component {
    render() {
      return (
        null
        /* <button className="square">
          { TODO }
        </button>
        
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      null
      /* return <Square />; 
    }
  
    render() {
      //const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

  */
  
  
  
  // ========================================
  
  ReactDOM.render(
    <Page />,
    document.getElementById('root')
  );
