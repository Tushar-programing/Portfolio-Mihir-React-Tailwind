import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check these out on my github"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Sign-up user with MERN Stack"
          des=" I was built full stack project to signup the user and send thankyou message with node.js or react.js."
          src={projectOne}
          githubLink="https://github.com/Tushar-programing/project2"
          websiteLink="https://project-register-user.vercel.app/"

        />
        <ProjectsCard
          title="Wheather application"
          des=" This is a weather application to show the data with city name or pin code built in react.js."
          src={projectTwo}
          githubLink="https://github.com/Tushar-programing/weather-Application"
          websiteLink="https://weather-application-omega-roan.vercel.app/"
        />
        <ProjectsCard
          title="E-commerce Dynamic Website"
          des=" This is a React.js E-commerce web app with features list-item, update item, add-to-cart, address."
          src={projectThree}
          githubLink="https://github.com/Tushar-programing/e-com"
          websiteLink="https://e-com-one-lime.vercel.app/"
        />
        <ProjectsCard
          title="Multi-step-form website with react.js"
          des=" This project get User idea with multi step form in react.js. I was create it to showcase only react.js."
          src={projectFour}
          githubLink="https://github.com/Tushar-programing/-multiStepForm"
          websiteLink="https://multi-step-form-puce-tau.vercel.app/"
        />
        <ProjectsCard
          title="Random code/password Generator"
          des=" This is a random code or passowrd generator by this we get custom code like string size, special character, numbers, is allowed or not."
          src={projectFive}
          githubLink="https://github.com/Tushar-programing/Password-generator"
          websiteLink="https://password-generator-lyart-sigma.vercel.app/"
        />
        <ProjectsCard
          title="Sign-up user backend "
          des=" This is a backend project with node.js to store user data and update user detail like location, profile-image, purpose of user."
          src={projectSix}
          githubLink="https://github.com/Tushar-programing/register-backend"
          websiteLink="https://register-backend-12k4.onrender.com/"
        />
      </div>
    </section>
  );
}

export default Projects