import React from 'react';
import image1 from './../assets/top-schools.jpg';
import {SocialIcon} from 'react-social-icons';


export default function Project() {
  const projectList = [
    {
      projectName: "Top Schools Nearby",
      projectDesc: "List of nearby schools",
      projectURL: "https://github.com/SJohnRose/Top-Schools-Nearby",
      projectTech: "WEB TECHNOLOGIES"
    },
    {
      projectName: "Browser-based Text Editor",
      projectDesc: "A Progressive Web App",
      projectURL: "https://github.com/SJohnRose/Browser-based-Text-Editor",
      projectTech: "Webpacks and PWA"
    },
    {
      projectName: "Employee Tracker",
      projectDesc: "Manage employee database",
      projectURL: "https://github.com/SJohnRose/Employee-Tracker-Application",
      projectTech: "Node.js, Inquirer and MySQL"
    },
    {
      projectName: "Team Profile Generator",
      projectDesc: "Generate team profile web page",
      projectURL: "https://github.com/SJohnRose/Team-Profile-Generator",
      projectTech: "Node.js, Inquirer and Jest"
    },
    {
      projectName: "Note Taker",
      projectDesc: "Write and save notes online",
      projectURL: "https://github.com/SJohnRose/Note-Taker-Application",
      projectTech: "Node.js and Express.js"
    },
    {
      projectName: "Simple Weather Dashboard",
      projectDesc: "Shows weather outlook",
      projectURL: "https://github.com/SJohnRose/SimpleWeatherDashboard",
      projectTech: "HTML, CSS, JavaScript"
    }
  ];

  return (
    <><div class="page">
      <div className = "project-gallery">
      {projectList.map((project) => (
        <div class="project-card">
          <img src={image1} alt="Snow" class="image"/>
          <div class="overlay">
            {/* <div> */}
              <h2> {project.projectName} </h2>
              <SocialIcon
                url = {project.projectURL}
                network = "github"
              />
              {/* <a href = {projectList[0].projectURL}>{projectList[0].projectName}</a> */}
            {/* </div> */}
            <p> {project.projectDesc} </p>
            <p> {project.projectTech} </p>
          </div>
        </div>
      ))}
      </div>
    </div></>
  );  
  }
  