import React from 'react';
import avatarImage from './../../assets/avatar.jpg';

export default function About() {
  return (
    <div className="page">
      <h2>About Me</h2>
      <img src={avatarImage} alt="Avatar" className= "avatar"/>
      <p>
        I am currently teaching Mathematics and IT at a secondary school in Melbourne. When I was asked to teach VCE Applied Computing a couple of years ago, 
        I had to teach myself to code in Python. That sparked my interest in coding and web development as 
        I enjoyed learning HTML, CSS, Unity/C# and several other languages as a hobby and also to increase my repertoire of coding 
        skills as an IT teacher. 
        <br/> <br/>
        As I explored the possibilities of embarking on a full-time career in software development, I came across the 
        Coding Bootcamp offered by Monash University and enrolled in it. After five months of juggling my teaching commitments with
        online classes and weekly challenges, I'm confident that I can pursue my dream career in web development.
        <br/> <br/>
        Currently, I'm in the final weeks of the Bootcamp and so far I have learnt how to design a professional and 
        responsive UI for a website, to develop servers and databases to manage the back-end of websites and 
        also been exposed to supporting recent technologies in the industry. Among other technologies, I have 
        learnt HTML, CSS, JavaScript,Web/Third-Party APIs, Node.js, Express.js, SQL, ORM, NoSQL,
        PWA, React and MERN stack. Also, part of the course were Computer Science concepts such as fundamentals of 
        Object-oriented Programming and data structures and algorithms. I have developed projects both independently and collaboratively 
        with other group members using the skills that I have learnt.
        <br/> <br/>
        I love gardening and reading when I'm not planning lessons or marking assessments.
        But, right now, I'm ready to take the next big step in my career and become part of a fun and challenging workplace
        where I can put my coding skills into good use.
        <br/> <br/>
        
        


      

      </p>
    </div>
  );
}
