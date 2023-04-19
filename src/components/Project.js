import React from 'react';
import img from './../assets/img_snow.jpg';

export default function Project() {
  return (
    <><div class="container">
            <img src={img} alt="Snow" class="image"/>
            <div class="overlay">Project Name</div>
    </div></>
  
  );
}