import React from 'react';

export default function Resume() {
  return (
    <div className="page">
      <h2>My Resume</h2>
      <p>
         Download my resume <a href="#home"> here </a>
      </p>
      <div className="tech-list">
      <h3> Front-end Technologies</h3>
      <ul>
        <li> HTML</li>
        <li> CSS</li>
        <li> JavaScript</li>
        <li> jQuery</li>
        <li> Bootstrap/Bulma CSS Frameworks</li>
      </ul>
      </div>
      <div className="tech-list">
      <h3> Back-end Technologies</h3>
      <ul>
        <li> API </li>
        <li> Node </li>
        <li> Express </li>
        <li> MongoDB/NoSQL </li>
        <li> React </li>
        <li> MySQL/Sequelize </li>
        <li> GraphQL </li>
        <li> REST </li>
      </ul>
      </div>
      <div className="tech-list">
      <h3> Additional skills</h3>
      <ul>
        <li> Git Versioning </li>
        <li> Chrome DevTools </li>
        <li> Git/Heroku Deployment </li>
        <li> Progressive Web Applications </li>
      </ul>
      </div>
    </div>
  );
}