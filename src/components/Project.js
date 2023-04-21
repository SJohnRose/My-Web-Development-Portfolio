import React from 'react';
//import img1  from './../assets/top-schools.jpg';
import { importImages } from '../utils/helpers';
import {SocialIcon} from 'react-social-icons';

const images = importImages(require.context('./../assets', false, /\.(png|jpe?g|svg)$/));

export default function Project() {
  const projectList = [
    {
      projectName: "Top Schools Nearby",
      projectDesc: "List of nearby schools",
      projectURL: "https://github.com/SJohnRose/Top-Schools-Nearby",
      projectTech: "WEB TECHNOLOGIES",
      projectImage: "top-schools.jpg"
    },
    {
      projectName: "Browser-based Text Editor",
      projectDesc: "A Progressive Web App",
      projectURL: "https://github.com/SJohnRose/Browser-based-Text-Editor",
      projectTech: "Webpacks and PWA",
      projectImage: "text-editor.jpg"
    },
    {
      projectName: "Employee Tracker",
      projectDesc: "Manage employee database",
      projectURL: "https://github.com/SJohnRose/Employee-Tracker-Application",
      projectTech: "Node.js, Inquirer and MySQL",
      projectImage: "employee-tracker.jpg"
    },
    {
      projectName: "Team Profile Generator",
      projectDesc: "Generate team profile web page",
      projectURL: "https://github.com/SJohnRose/Team-Profile-Generator",
      projectTech: "Node.js, Inquirer and Jest",
      projectImage: "team-profile.jpg"
    },
    {
      projectName: "Note Taker",
      projectDesc: "Write and save notes online",
      projectURL: "https://github.com/SJohnRose/Note-Taker-Application",
      projectTech: "Node.js and Express.js",
      projectImage: "note-taker.jpg"
    },
    {
      projectName: "Simple Weather Dashboard",
      projectDesc: "Shows weather outlook",
      projectURL: "https://github.com/SJohnRose/SimpleWeatherDashboard",
      projectTech: "HTML, CSS, JavaScript",
      projectImage: "weather-dashboard.png"
    }
  ];

  return (
    <><div className="page">
      <div className = "project-gallery">
      {projectList.map((project) => (
        <div className = "project-container">
          <div className="project-card">
          <img src={images[project.projectImage].default} alt="Snow" className="image"/>   
          <div className="project-card overlay">
            
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
        </div>
      ))}
      </div>
    </div></>
  );  
  }
  