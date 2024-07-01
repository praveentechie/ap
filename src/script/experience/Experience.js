import './experience.scss';

const experienceList = [
  {
    id: 'Walmart',
    logoPath: '/assets/img/walmart.png',
    designation: 'Senior Software Engineer',
    projectName: 'Digital talent book',
    projectDesc: 'An intuitive, cloud-based property management solution for resorts and hotels. Keep business flowing effortlessly, on any operating system.',
    responsibilities: [
      'Contribute core feature across stack.',
      'Involve in designing and implementing infrastructure changes.',
      'Develop frameworks to improve the quality and increase the performance of the product.',
      'Provide solution for issues related to feature development, dev environment.'
    ],
    accomplishments: [
      'Added multi-language support to the application.',
      'Reduced batch operations load in BE by 25%.',
      'Implemented gzip compression mechanism and decreased app load time by 50%.',
      'Provide solution for issues related to feature development, dev environment.'
    ],
    footer: 'Nov 2021 - Present | Chennai, India'
  }, {
    id: 'Agilysys',
    logoPath: '/assets/img/agilysys.png',
    designation: 'Lead Software Analyst',
    projectName: 'Agilysys Stay',
    projectDesc: 'An intuitive, cloud-based property management solution for resorts and hotels. Keep business flowing effortlessly, on any operating system.',
    responsibilities: [
      'Contribute core feature across stack.',
      'Involve in designing and implementing infrastructure changes.',
      'Develop frameworks to improve the quality and increase the performance of the product.',
      'Provide solution for issues related to feature development, dev environment.'
    ],
    accomplishments: [
      'Added multi-language support to the application.',
      'Reduced batch operations load in BE by 25%.',
      'Implemented gzip compression mechanism and decreased app load time by 50%.',
      'Provide solution for issues related to feature development, dev environment.'
    ],
    footer: 'Feb 2018 - Nov 2021 | Chennai, India'
  }, {
    id: 'WIPRO',
    logoPath: '/assets/img/wipro.png',
    designation: 'Project Engineer',
    projectName: 'Brucke Platform - Apple Online Store',
    projectDesc: 'A platform to define a standard approach for managing life cycle of a product release/maintenance eliminating hurdles of manual processing. The platform helps in configuring the Apple\'s product availability based on region.',
    responsibilities: [
      'Convert the mock screen to working application and integrate with service.',
      'Upgrade/Maintain dependant node packages and third party libraries.',
      'Support product release and production maintenance activities.'
    ],
    accomplishments: [
      'Implemented MVC framework based on React-Redux / Angular architecture for front-end and NodeJS for server.',
      'Developed reusable UI components using React and jQuery libraries.',
      'Conducted KT session on new libraries/frameworks that are introduced in the application.'
    ],
    footer: 'Sep 2014 - Dec 2017 | Chennai, India'
  }
];

const Experience = () => {
  return (
    <section id='experience' className='section experience'>
      <header>
        <h1 className='page-header'>Experience</h1>
      </header>
      <div className='container'>
        {
          experienceList.map(experience => (
            <div className='card-container' key={experience.id}>
              <div className='card-header'>
                <span>
                  <img className='org-logo' src={`${window.repoName}${experience.logoPath}`} alt={experience.id} />
                </span>
                <span className='designation'>{experience.designation}</span>
              </div>
              <div className='card-body'>
                <h3 className='project-name'>{experience.projectName}</h3>
                <p>{experience.projectDesc}</p>
                <ul>
                  {
                    experience.responsibilities.map(responsibility => (
                      <li key={responsibility}>{responsibility}</li>
                    ))
                  }
                </ul>
                <h5 className='accomplishments'>ACCOMPLISHMENTS</h5>
                <ul>
                  {
                    experience.accomplishments.map(accomplishment => (
                      <li key={accomplishment}>{accomplishment}</li>
                    ))
                  }
                </ul>
              </div>
              <div className='card-footer'>{experience.footer}</div>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Experience;