import React, { Component } from 'react'


export default class Resume extends Component {
    render(){
      return (
  
        <section id="resume" className="container" data-scroll-index={3}>
          <h2>Resume</h2>
          <div className="resume-table">
            <table>
              <tbody><tr>
                  <th>Education</th>
                </tr>
                <tr>
                  <td>Sep 2016 - Sep 2020</td>
                  <td style={{fontWeight: 'bold'}}>Bachelor of Mechanical Engineering</td>
                </tr>
                <tr>
                  <td />
                  <td className="company">The Hong Kong University of Science and Technology</td>
                </tr>
                <tr>
                  <td>Sep 2009 - Sep 2015</td>
                  <td style={{fontWeight: 'bold'}}>Hong Kong Diploma of Secondary Education</td>
                </tr>
                <tr>
                  <td />
                  <td className="company">The Y.W.C.A. Hioe Tjo Yoeng College</td>
                </tr>
                <tr>
                  <th />
                </tr>
                <tr>
                  <th>Experience</th>
                </tr>
                <tr>
                  <td>Oct 2020 - Present</td>
                  <td className="post" style={{fontWeight: 'bold'}}>Assistant Engineering Officer</td>
                </tr>
                <tr>
                  <td />
                  <td className="company">Hong Kong Productivity Council</td>
                </tr>
                <tr>
                  <td>Jun 2019 - Sep 2019</td>
                  <td style={{fontWeight: 'bold'}}>Summer Intern</td>
                </tr>
                <tr>
                  <td />
                  <td className="company">Chubb Hong Kong Limited</td>
                </tr>
                <tr>
                  <th />
                </tr>
                <tr>
                  <th>Achievement</th>
                </tr>
                <tr>
                  <td>2016</td>
                  <td className="post" style={{fontWeight: 'bold'}}>HKDSE Mathematics - Level 5**</td>
                </tr>
                <tr>
                  <th />
                </tr>
              </tbody></table>
          </div>
        </section>
      )
    }
  }

