import React from 'react';
import avatarImage from './../../assets/avatar.jpg';

export default function About() {
  return (
    <div className="page">
      <h2>About Me</h2>
      <img src={avatarImage} alt="Avatar" className= "avatar"/>
      <p>
        I am a secondary school Mathematics and IT teacher interested in coding and learning the skills required to become a web developer.
        My interest started when I taught myself Python coding to teach my students. As a coding teacher, I also had to learn HTML, CSS, Unity/C# and several other 
        technologies as part of my role as a Computing elective teacher. 
        Currently, I'm in the final weeks of a Coding Bootcamp from Monash University where I have learnt HTML, CSS, JavaScript, 
        Web APIs, Node.js, Express.js, SQL, ORM, NoSQL,
        PWA, React and MERN stack among other skills. Also, part of the course was fundamentals of Object-oriented Programming and 
        Computer Science concepts such as data structures and algorithms.
        <br/> <br/>
        Today, I consider myself as a competent web developer who can create responsive and effective websites.
        <br/> <br/>
        I would like to switch to a more challenging career as a web developer where I can use my
        coding skills to ...
        <br/> <br/>
        My qualifications include degrees in Computer Science, Teaching and a Certificate IV in Training and Assessment.


      

      </p>
    </div>
  );
}
