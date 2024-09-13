// src/About.js
import React from 'react';
import reactLogo from '../assets/htmllogo.png';
import htmlLogo from '../assets/csslogo.png';
import cssLogo from '../assets/jslogo.png';
import jsLogo from '../assets/reactlogo.png';
import bootstrap from '../assets/bootstraplogo.png';
import tslogo from '../assets/tslogo.png'
import node from '../assets/png-transparent-green-grass-nodejs-javascript-react-mean-angularjs-logo-symbol-thumbnail.png'
import mongodb from '../assets/png-transparent-mongodb-nosql-database-computer-icons-others-leaf-grass-fruit.png'
const skills = [
  {logo: reactLogo },
  {logo: htmlLogo },
  {logo: cssLogo },
  {logo:tslogo},
  {logo: jsLogo },
  {logo: bootstrap },
  {logo: node },
  {logo:mongodb}
  
 
];

const About = () => {
  return (
    <div className="  flex flex-col items-center p-4 ">
      <h1 className="text-3xl font-bold mb-8 text-white">Skills </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
        {skills.map((skill,id) => (
          <div key={id} className="flex flex-col items-center p-4   shadow-md   rounded-full">
            <img src={skill.logo}  className="w-16 h-16 mb-2" />
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
