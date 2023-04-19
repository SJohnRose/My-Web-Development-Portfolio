import React from 'react';
import {SocialIcon} from 'react-social-icons';

export default function Footer() {
  return (
    <footer className ="footer">
      <h1>
        Footer
      </h1>
      <SocialIcon
         url = "https://github.com/SJohnRose"
         network = "github"
         className = "FooterIcon"
      />
      <SocialIcon
         url = "https://github.com/SJohnRose"
         network = "github"
         className = "FooterIcon"
      />
    </footer>
  );
}