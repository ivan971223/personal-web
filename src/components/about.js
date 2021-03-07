import React, { Component } from 'react'


export default class About extends Component {
  render() {
    return (

      <section id="about" className="container" data-scroll-index={1}>
        <div className="profile">
          <h2>About Me</h2>
          <div className="c-container">

         

            <div className="c-box">
              <div className="c-content">
                <p>I am a graduate of the Department of Mechanical Engineering of the Hong Kong University of Science and
                Technology.
                I like to learn cutting-edge technology, especially in the field of financial computing and multimedia
                computing. I like to think out of the box and generate new ideas. I like to challenge myself, which gives me
              motivation.</p>
                <div />
                <div />
              </div>
            </div>

            <div className="c-box">
              <div className="c-content">
                <img src="images/myface.jpg" alt="myface" className="myface"></img>
              </div>
            </div>

            <div className="c-box">
              <div className="c-content">
                <h3 style={{ fontWeight: 'bold' }}>Details:</h3>
                <h3 style={{ fontWeight: 'bold' }}>Name: Chan Tsz Leung</h3>
                <h3 style={{ fontWeight: 'bold' }}>Age: 23</h3>
                <h3 style={{ fontWeight: 'bold' }}>Email: ivan971223@gmail.com</h3>

                <div className="center">
                  <a href="./document/Chan Tsz Leung CV.pdf" target="_blank " download className="cv-btn">Download Cv</a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section >
    )
  }
}

