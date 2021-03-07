import React, { Component } from 'react'


export default class Project extends Component {
    render(){
      return (
  
        <section id="project" className="container" data-scroll-index={2}>
          {/*heading------------*/}
          <div className="s-heading">
            <h1>Project</h1>
          </div>
          {/*services-box-container-------*/}
          <div className="b-container">
            {/*box-1--------------*/}
            <div className="s-box">
              {/*type---------*/}
              <div className="s-type">Mobile App</div>
              {/*name-----*/}
              <img src="images/pj-app.jpg" alt="Mobile App" />
              <div className="pj-description">
                <h1>Coffast</h1>
                <p>Develop a mobile ordering application for customers to order coffee</p>
              </div>
            </div>
            {/*text---------------*/}
            {/*box-2--------------*/}
            <div className="s-box">
              {/*type---------*/}
              <div className="s-type">Robotics</div>
              {/*name-----*/}
              <img src="images/pj-robot.jpeg" alt="robot" />
              <div className="pj-description">
                <h1>Robot</h1>
                <p>Design and manufacture a robot to perform tasks</p>
              </div>
            </div>
            {/*text---------------*/}
            {/*box-3--------------*/}
            <div className="s-box">
              {/*type---------*/}
              <div className="s-type">3D Design</div>
              {/*name-----*/}
              <picture>
                <source srcSet="images/pj-car.JPG" media="(max-width: 1190px)" />
                <img src="images/pj-car2.jpg" alt="Cart" />
              </picture>
              <div className="pj-description">
                <h1>Pedal kart</h1>
                <p>Design a pedal kart for a contest held by Hong Kong Charity</p>
              </div>
              {/*text---------------*/}
            </div>
          </div>
        </section>
      )
    }
  }

