import React, { Component } from 'react'
import NameResponsive from './name_responsive.js';

export default class Home extends Component {
  
  render() {
    return (

      <section id="home" className="container" data-scroll-index={0}>
        {/*name*/}
        <div className="name">
          <p>Hello,</p>
          <h1>I am <font color="#17d1ac"><NameResponsive/></font>
          </h1>
        </div>
  
      </section>
    )
  }
}