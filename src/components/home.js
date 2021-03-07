import React, { Component } from 'react'
import './home.css';


export default class Home extends Component {
  render() {
    return (

      <section id="home" className="container" data-scroll-index={0}>
        {/*name*/}
        <div className="name">
          <p>Hello</p>
          <h1>I am <font color="#17d1ac">Chan Tsz Leung</font>
          </h1>
        </div>
        <div className="soci
      al">
          <a href="#"><i className="fab fa-facebook-f" /></a>
          <a href="#"><i className="fab fa-twitter" /></a>
          <a href="#"><i className="fab fa-instagram" /></a>
          <a href="#"><i className="
        fab fa-youtube" /></a>
        </div>
      </section>
    )
  }
}