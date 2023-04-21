import React from 'react';
import { importImages } from '../utils/helpers';
import {SocialIcon} from 'react-social-icons';
import projectList from '../data/projectList';

const images = importImages(require.context('./../assets', false, /\.(png|jpe?g|svg)$/));

export default function Project() {
  
  return (
    <><div className="page">
        <div className = "project-gallery">
          {projectList.map((project) => (
          <div className = "project-container">
            <div className="project-card">
              <img src={images[project.projectImage].default} alt="Snow" className="image"/>   
              <div className="project-card overlay">
                <h2> {project.projectName} </h2>
                <SocialIcon
                  url = {project.projectURL}
                  network = "github"
                />
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
  