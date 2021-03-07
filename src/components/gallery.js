import React, { Component } from 'react'

export default class Gallery extends Component {
    render(){
      return(
        <section id="gallery" data-scroll-index={4}>
          {/*heading---------*/}
          <div className="heading">
            <h1 className="p-headind">Gallery</h1>
            <p className="p-subhead">I love exploring.</p>
            <p className="p-subhead">I love photographing.</p>
            <p className="p-subhead">I love travelling.</p>
          </div>
          {/*portfolio-container----------*/}
          <div className="p-container">
            {/*portfolio-box-1------*/}
            <div className="p-box">
              {/*text-------*/}
              <div className="overlay-text">
                <h1>Osaka</h1>
                <p />
              </div>
              {/*bg-img-----------*/}
              <img src="images/w1.jpeg" alt="w1" />
            </div>
            {/*portfolio-box-2------*/}
            <div className="p-box">
              {/*text-------*/}
              <div className="overlay-text">
                <h1>Osaka</h1>
              </div>
              {/*bg-img-----------*/}
              <img src="images/w2.jpg" alt="w1"/>
            </div>
            {/*portfolio-box-3------*/}
            <div className="p-box">
              {/*text-------*/}
              <div className="overlay-text">
                <h1>Bangkok</h1>
              </div>
              {/*bg-img-----------*/}
              <img src="images/w3.jpg" alt="w1"/>
            </div>
            {/*portfolio-box-4------*/}
            <div className="p-box">
              {/*text-------*/}
              <div className="overlay-text">
                <h1>Osaka</h1>
              </div>
              {/*bg-img-----------*/}
              <img src="images/w4.jpg" alt="w1"/>
            </div>
            {/*portfolio-box-5------*/}
            <div className="p-box">
              {/*text-------*/}
              <div className="overlay-text">
                <h1>Jeju Island</h1>
              </div>
              {/*bg-img-----------*/}
              <img src="images/w5.jpg" alt="w1"/>
            </div>
            {/*portfolio-box-6------*/}
            <div className="p-box">
              {/*text-------*/}
              <div className="overlay-text">
                <h1>Osaka</h1>
              </div>
              {/*bg-img-----------*/}
              <img src="images/w6.JPG" alt="w1"/>
            </div>
          </div>
        </section>
      
      )
    }
  }

