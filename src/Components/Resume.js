import React, { Component } from 'react';

class Resume extends Component {
  render() {

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 
               <div key="University of Missouri Kansas City"><h3>University of Missouri Kansas City</h3>
        <p className="info">Masters in Computer Science<span>&bull;</span><em className="date">December 2017</em></p>
        <p>Master's program has given me an opportunity to improve my practical knowledge. I have done may projects which helped me improve my programming skills and also had a good experience to work with a team. I have improved my problem solving skills and also learnt to find optimal solutions for a given problem.</p></div>

        <div key="Jawaharlal Technological University"><h3>Jawaharlal Technological University</h3>
        <p className="info">Bachelors in Computer Science <span>&bull;</span><em className="date">April 2014</em></p>
        <p>Bachelor's program helped me to write basic programs. I have done various courses where I learned may new things. I did a few team projects where I learned the basics pf writing code. Every course was challenging and helped me learn new things.</p></div>
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
         <div key="Cerner Corporation"><h3>Cerner Corporation</h3>
            <p className="info">Software Developer<span>&bull;</span> <em className="date">February 2018 - Present</em></p>
            <p>Joined as Software Developer after undergoing training on latest technologies and coding practices. Working with health care system helped me to design applications more securely. It also improved my skills to co-ordinate with teams and also gained professional experience.</p>
        </div>

        <div key="Shaping Art"><h3>Shaping Art</h3>
            <p className="info">Software Developer Intern<span>&bull;</span> <em className="date">May 2017 - July 2017</em></p>
            <p>As an intern to work on mobile application, I have learned a lot about real time development. It helped me to gain real time experience on release activities.</p>
        </div>

        <div key="Tata Consultancy Services"><h3>Tata Consultancy Services</h3>
            <p className="info">Software Developer<span>&bull;</span> <em className="date">June 2014 - July 2016</em></p>
            <p>As a software developer, I got an opportunity to work on a real time project. I got an experience to deal with clients and gather requirements. It learned to design an application and implement it. The work gave me a chance to learn and explore new technologies.</p>
        </div>
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

				<div className="bars">
				   <ul className="skills">
           <li key="Java"><span style={{width:"90%"}}className="bar-expand Java"></span><em>Java</em></li>
           <li key="ReactJS"><span style={{width:"60%"}}className="bar-expand ReactJS"></span><em>ReactJS</em></li>
           <li key="JavaScript"><span style={{width:"90%"}}className="bar-expand JavaScript"></span><em>JavaScript</em></li>
           <li key="HTML5"><span style={{width:"80%"}}className="bar-expand HTML5"></span><em>HTML5</em></li>
           <li key="CSS"><span style={{width:"80%"}}className="bar-expand CSS"></span><em>CSS</em></li>
           <li key="MongoDB"><span style={{width:"60%"}}className="bar-expand MongoDB">></span><em>MongoDB</em></li>
           <li key="Git"><span style={{width:"80%"}}className="bar-expand Git"></span><em>Git</em></li>
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
