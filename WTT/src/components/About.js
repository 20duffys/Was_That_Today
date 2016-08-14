//by Sam Duffy
import React, { Component } from 'react';
import '../stylesheets/About.css';

class About extends Component {
  
  render() {
    return(
      <div>
          <div className="about-order">
            <div className="portrait1"></div>
            <div className="person-info">
              <h3>Austin Hudson</h3>
                <a href="https://www.linkedin.com/in/austin-hudson" target="_blank">Linkedin</a>
                <a href="https://github.com/Austin-Hudson" target="_blank">GitHub</a>
              <p>Austin is a full stack Web Developer and soon to be graduate of the prestigious General Assembly Web Development immersive. Coming from an IT technician background, Austin brings precison and ingenuity to the web development field. Austin is also a Stony Brook graduate and his previous project includes GoodEats, a site which allows one to upload photos and comment on restaurants</p>
            </div>
          </div>
          <br />
          <div className="about-order">
            <div className="portrait2"></div>
            <div className="person-info">
              <h3>Joseph Sul</h3>
                <a href="https://www.linkedin.com/in/joesul" target="_blank">Linkedin</a>
                <a href="https://github.com/joesul" target="_blank">GitHub</a>
              <p>A former general manager at NYU Bakery INC, Joseph has taken on the challenge of becoming a web developer with stride, illustrating a level head and an adaptive mind. Early in the project, Joseph was quick to use his soft skills to persuade the company behind this project's API that "Was That Today?" deserved to have access to the entire API rather than a small snipit. Joseph is a great manager wherever he goes.</p>
            </div>
        </div>
          <br />
          <div className="about-order">
            <div className="portrait3"></div>
            <div className="person-info">
              <h3>Sam Duffy</h3>
                <a href="https://www.linkedin.com/in/samduffycodes" target="_blank">Linkedin</a>
                <a href="https://github.com/20duffys" target="_blank">GitHub</a>
              <p>Sam is the youngest person to ever be in the General Assembly Web Development Immersive. Only a recent high-school graduate, Sam decided to thrust himself into the coding world before going to Stanford. Despite never coding before two weeks before the immersive, he has driven himself to the challenge.
            </p>
            </div>
          </div>
      </div>
    )
  }
}

export default About;
