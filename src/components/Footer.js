import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className ="footer">
      <a href="https://github.com/SJohnRose"
        className="github-icon">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/Shaminijohnrose"
        className="linkedIn-icon">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://twitter.com/ShaminiJ"
        className="twitter-icon">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
    </div>
  );
}