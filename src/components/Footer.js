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
         url = "https://www.linkedin.com/in/shamini-prabaharan-john-rose-4676b064?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BatgORWu5SLaqpi32WSWfLA%3D%3D"
         network = "linkedIn"
         className = "FooterIcon"
      />
    </div>
  );
}