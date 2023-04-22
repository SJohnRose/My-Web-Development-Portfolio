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
                <div className="project-title">
                <h2> {project.projectName} </h2>
                <SocialIcon className="social-icon"
                  url = {project.projectURL}
                  network = "github"
                  style = {{height:25, width:25}}
                  bgcolor = "#f06c9b"
                />
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
  