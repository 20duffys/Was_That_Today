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
              <p>Austin is a full stack Web Developer and soon to be graduate of the prestigious General Assembly Web Development Immersive. As a former IT technician, Austin brings precison and ingenuity to the web development field. Austin holds a computer science degree from SUNY Stony Brook, and his previous project includes GoodEats, a site which allows one to upload photos and comment on restaurants.</p>
            </div>
          </div>
          <br />
          <div className="about-order">
            <div className="portrait2"></div>
            <div className="person-info">
              <h3>Joseph Sul</h3>
                <a href="https://www.linkedin.com/in/joesul" target="_blank">Linkedin</a>
                <a href="https://github.com/joesul" target="_blank">GitHub</a>
              <p>With strong managerial experience at New York based retail companies, Joseph is an effective web developer who can solve problems with confidence. He is level headed and adaptive. In the early stages of the company, Joseph persuaded Semantics3 that the company "Was That Today?" should have access to the entire API database rather than a sample segment. Joseph is a great manager.</p>
            </div>
        </div>
          <br />
          <div className="about-order">
            <div className="portrait3"></div>
            <div className="person-info">
              <h3>Sam Duffy</h3>
                <a href="https://www.linkedin.com/in/samduffycodes" target="_blank">Linkedin</a>
                <a href="https://github.com/20duffys" target="_blank">GitHub</a>
              <p>Sam is the youngest person to ever be admitted to the General Assembly Web Development Immersive. A recent high-school graduate of the Collegiate School, which has a strong focus in the humanities, Sam decided to learn coding before going to Stanford in the Fall. A published author and winner of national history prizes, Sam sees a strong connection between writing and coding. He loves crushing bugs.
            </p>
            </div>
          </div>
      </div>
    )
  }
}

export default About;
