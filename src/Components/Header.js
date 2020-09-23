import React, { Component } from 'react';

class Header extends Component {
  render() {

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm Manasa Thipparthi.</h1>
            <h3>I'm a Kansas based <span>Software Developer</span>. Software Engineer who is a passionate learner and wants to pursue a career in computer science, work in a challenging environment and contribute to the growth of the organization using my technical creative skills which would help in personal and organizational development.</h3>
            <hr />
            <ul className="social">
            <li key="linkedin"><a href="https://www.linkedin.com/in/manasathipparthi/"><i className="fa fa-linkedin"></i></a></li>
            <li key="github"><a href="https://github.com/ThipparthiManasa"><i className="fa fa-github"></i></a></li>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
