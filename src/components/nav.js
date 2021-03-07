import React, { Component } from 'react'


export default class Nav extends Component {
    render() {
        return (

            <section id="nav">
                <div className="navbar">
                    <nav>
                        <a href="#" className="logo">Louis Chan</a>
                        <div className="dropdown">
                            <button className="dropbtn" >

                            </button>
                            <div className="dropdown-content">
                                <li><a href="#" className="active" data-scroll-nav={0}>Home</a></li>
                                <li><a href="#" data-scroll-nav={1}>About</a></li>
                                <li><a href="#" data-scroll-nav={2}>Project</a></li>
                                <li><a href="#" data-scroll-nav={3}>Resume</a></li>
                                <li><a href="#" data-scroll-nav={4}>Interest</a></li>
                                <li><a href="#" data-scroll-nav={5}>Contact</a></li>
                            </div>
                        </div>
                        <ul className="menu">
                            <li><a href="#" className="active" data-scroll-nav={0}>Home</a></li>
                            <li><a href="#" data-scroll-nav={1}>About</a></li>
                            <li><a href="#" data-scroll-nav={2}>Project</a></li>
                            <li><a href="#" data-scroll-nav={3}>Resume</a></li>
                            <li><a href="#" data-scroll-nav={4}>Interest</a></li>
                            <li><a href="#" data-scroll-nav={5}>Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </section>
        )
    }
}

