import React from 'react';
import {SocialIcon} from 'react-social-icons';

export default function Footer() {
  return (
    <div className ="footer">
      <SocialIcon
         url = "https://github.com/SJohnRose"
         network = "github"
         className = "FooterIcon"
      />
      <SocialIcon
         url = "www.linkedin.com/in/ShaminiJohnRose"
         network = "linkedIn"
         className = "FooterIcon"
      />
    </div>
  );
}