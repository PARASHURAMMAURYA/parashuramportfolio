
import reactLogo from "../assets/htmllogo.png";
import htmlLogo from "../assets/csslogo.png";
import cssLogo from "../assets/jslogo.png";
import jsLogo from "../assets/reactlogo.png";
import bootstrap from "../assets/bootstraplogo.png";
import tslogo from "../assets/typescript.png";
import node from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import express from "../assets/express-js.png";
import tailwind from '../assets/tailwind.png';
import vscode from '../assets/vscode.png' 
import github from '../assets/githublogo.png';
import netlify from '../assets/Netlify_logo_(2).svg'
const skills = [
  { logo: reactLogo },
  { logo: htmlLogo },
  { logo: cssLogo },
  { logo: tslogo },
  { logo: jsLogo },
  { logo: bootstrap },
  { logo: node },
  { logo: mongodb },
  { logo: express },
  {logo:tailwind},
];


const Tools = [
  { logo: vscode },
  { logo: github },
  { logo: netlify },
  
];

const About = () => {
  return (
    <div className="  flex flex-col items-center p-4 ">
      <h1 className=" text-3xl font-bold mb-8 text-white">Skills </h1>
      <div className="animate-slide-left grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
        {skills.map((skill, id) => (
          <div
            key={id}
            className="flex flex-col items-center p-4   shadow-md   rounded-full"
          >
            <img alt="logos" src={skill.logo} className="w-16 h-16 mb-2" />
          </div>
        ))}
      </div>


      <h1 className=" text-3xl font-bold pt-20 mb-8 text-white">Tools I Use </h1>
      <div className="animate-slide-right grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
        {Tools.map((tool, id) => (
          <div
            key={id}
            className="flex flex-col items-center p-4   shadow-md   rounded-full"
          >
            <img alt="logos" src={tool.logo} className="w-16 h-16 mb-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
