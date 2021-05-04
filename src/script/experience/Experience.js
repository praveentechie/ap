import './experience.scss';

const Experience = () => {
  return (
    <section id='experience' className='section experience'>
      <header>
        <h1 className='page-header'>Experience</h1>
      </header>
      <div className='container'>
        <div className='card-container'>
          <div className='card-header'>
            <span>
              <img className='org-logo' src={`${window.repoName}/assets/img/agilysys.png`} alt='agilysys' />
            </span>
            <span className='designation'>Full stack web developer</span>
          </div>
          <div className='card-body'>
            <h3 className='project-name'>Agilysys Stay</h3>
            <p>An intuitive, cloud-based property management solution for resorts and hotels. Keep business flowing effortlessly, on any operating system.</p>
            <ul>
              <li>Contribute core feature across stack.</li>
              <li>Involve in designing and implementing infrastructure changes.</li>
              <li>Develop frameworks to improve the quality and increase the performance of the product.</li>
              <li>Provide solution for issues related to feature development, dev environment.</li>
            </ul>
            <h5 className='accomplishments'>ACCOMPLISHMENTS</h5>
            <ul>
              <li>Added multi-language support to the application.</li>
              <li>Reduced batch operations load in BE by 25%.</li>
              <li>Implemented gzip compression mechanism and decreased app load time by 50%.</li>
            </ul>
          </div>
          <div className='card-footer'>
            Feb 2018 - Present | Chennai, India
          </div>
        </div>
        <div className='card-container'>
          <div className='card-header'>
            <span>
              <img className='org-logo wipro' src={`${window.repoName}/assets/img/wipro.png`} alt='agilysys' />
            </span>
            <span className='designation'>Front end web developer</span>
          </div>
          <div className='card-body'>
            <h3 className='project-name'>WIPRO Technologies, Brucke Platform - AOS</h3>
            <p>
              A platform to define a standard approach for managing life cycle of a product release/maintenance eliminating hurdles of manual processing.
              The platform helps in configuring the Apple's product availability based on region.
            </p>
            <ul>
              <li>Convert the mock screen to working application and integrate with service.</li>
              <li>Upgrade/Maintain dependant node packages and third party libraries.</li>
              <li>Support product release and production maintenance activities.</li>
            </ul>
            <h5 className='accomplishments'>ACCOMPLISHMENTS</h5>
            <ul>
              <li>Implemented MVC framework based on React-Redux / Angular architecture for front-end and NodeJS for server.</li>
              <li>Developed reusable UI components using React and jQuery libraries.</li>
              <li>Conducted KT session on new libraries/frameworks that are introduced in the application.</li>
            </ul>
          </div>
          <div className='card-footer'>
            Sep 2014 - Dec 2017 | Chennai, India
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;