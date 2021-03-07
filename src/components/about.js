import React, { Component } from 'react'
import './about.css';

export default class About extends Component {
  render() {
    return (

      <section id="about" className="container" data-scroll-index={1}>
        {/*name*/}
        <div className="profile">
          <h2>About Me</h2>
          <p>I am a graduate of the Department of Mechanical Engineering of the Hong Kong University of Science and
          Technology.
          I like to learn cutting-edge technology, especially in the field of financial computing and multimedia
          computing. I like to think out of the box and generate new ideas. I like to challenge myself, which gives me
              motivation.</p>
          <div className="center">
            <a href="./document/Chan Tsz Leung CV.pdf" target="_blank " download className="cv-btn">Download Cv</a>
          </div>
        </div>
      </section>
    )
  }
}

