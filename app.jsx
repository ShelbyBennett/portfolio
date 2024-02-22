// App.js

import React from 'react';
import './App.css'; // Import your CSS file
import logo from './assests/images/logo.jpg'; // Import your logo image
import mountains from './assests/images/mountains-1412683_1280.png'; // Import your mountains image
import headshot from './assests/images/9B69E205-349B-4578-86B0-57BA4D8E4D9B_4_5005_c.jpeg'; // Import your headshot image
import codeRefactor from './assests/images/3F765986-F8B6-4180-B798-C67730F12684_4_5005_c.jpeg'; // Import your code refactor image
// Import other images as needed

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <a href="#"><img src={logo} alt="logo" className="logo" height="130px" width="160px"></a>
          <ul>
            <li><a href="#aboutme">About Me</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contactme">Contact Me</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><button type="button-cv">Download CV</button></li>
          </ul>
        </nav>
      </header>
      <div className="hero">
        <img src={mountains} alt="mountains" style={{ width: '100vw', height: '35vh' }} />
        <div className="title">
          <h1>Hello!</h1> <h3>I'm Shelby <span>Bennett</span></h3>
        </div>
      </div>
      <main>
        <section id="aboutme">
          <h2>About Me</h2>
          <div className="about-content">
            <img src={headshot} alt="headshot" style={{ height: '55vh' }} />
            <p>Hi I'm Shelby, welcome to my portfolio!<br />
              I graduated from the University of Central Florida in December 2022 with my BS in Health Sciences pre-clinical. I am currently getting my masters at UCF in industrial engineering-systems engineering.I am also taking a bootcamp at UCF for computer coding. <br />
              My hobbies including running, I have completed marathons and half marathons, and playing with my 2 year old golden retriver Reggie. <br />
              In December 2022 I also comissioned as an officer in the United States Army. I am a 2LT in the Adjutant General Corp, and I am currently with the 912th AG Comapany in Orlando Florida.
            </p>
          </div>
        </section>
        <section id="work">
          <h2>Work</h2>
          <div className="work-content">
            <div id="one">
              <img src={codeRefactor} alt="code refactor" />
              <a href="https://github.com/ShelbyBennett/code-refactor">https://github.com/ShelbyBennett/code-refactor</a>
            </div>
            {/* Add other work items as needed */}
          </div>
        </section>
        {/* Add other sections like Resume and Contact Me */}
      </main>
    </div>
  );
}

export default App;