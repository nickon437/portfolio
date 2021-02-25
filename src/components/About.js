import React from 'react';
import Icons from '../resources/values/Icons';
import Resume from '../resources/docs/Resume.pdf';

const About = () => {
  const toolData = [
    Icons.java,
    Icons.sceneBuilder,
    Icons.javascript,
    Icons.typescript,
    Icons.jQuery,
    Icons.sass,
    Icons.reactJS,
    Icons.redux,
    Icons.nodeJS,
    Icons.antlr,
    Icons.junit,
    Icons.jest,
    Icons.seleniumWebDriver,
    Icons.mySQL,
    Icons.mongodb,
    Icons.appEngine,
    Icons.git,
    Icons.unity,
  ];

  const toolList = toolData.map((tool) => (
    <li data-name={tool.name}>
      <img src={tool.logo} alt={tool.name} />
    </li>
  ));

  return (
    <div id='about' className='body-content'>
      <h1>ABOUT ME</h1>
      <div className='page-content'>
        A software engineer who loves to collab and build intuitive,
        maintainable and scalable applications. I have experienced in working in
        Agile environment with an emphasis on utilizing best practices to create
        software that meets requirements and schedule.
      </div>
      <div>
        <a href={Resume} className='std-btn' download>
          DOWNLOAD RESUME
        </a>
      </div>
      <div>
        <h2>TECHNOLOGIES I WORK WITH</h2>
        <ul className='tech-stack horizontal-list'>{toolList}</ul>
      </div>
    </div>
  );
};

export default About;
