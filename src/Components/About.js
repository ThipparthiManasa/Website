import React, { Component } from 'react';

class About extends Component {
  render() {

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src='images/portfolio/profilepic.jpeg' alt="Manasa Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>Software Engineer who is a passionate learner and wants to pursue a career in computer science, work in a challenging environment and contribute to the growth of the organization using my technical creative skills which would help in personal and organizational development.</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Manasa Thipparthi</span><br />
						   <span>
						         Overland Park Kansas, 66223
                   </span><br />
						   <span>8168598218</span><br />
                     <span>manasareddy.thipparthi@gmail.com</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href="https://docs.google.com/document/d/1MgSQnc2nc7mBeSZ6IAfJuArGxmYkgaxZNglHmaFx65I/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
