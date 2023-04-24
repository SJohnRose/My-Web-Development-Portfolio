import React from 'react';
import { importImages } from '../utils/helpers';
import projectList from '../data/projectList';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
 } from "@fortawesome/free-brands-svg-icons";

const images = importImages(require.context('./../assets', false, /\.(png|jpe?g|svg)$/));

export default function Project() {
  
  return (
    
    <><div className="page">
      <h2> My Projects</h2>
        <div className = "project-gallery">
          {projectList.map((project) => (
          <div className = "project-container">
            <div className="project-card">
              <img src={images[project.projectImage].default} alt="Project" className="image"/>   
              <div className="project-card overlay">
                <div className="project-title">
                <h2> <a href={project.deployedURL}>{project.projectName} </a> </h2>
                <a href={project.githubURL}>
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                </div>
                <p> {project.projectDesc} </p>
                <h6> {project.projectTech} </h6>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div></>
    );  
  }
  