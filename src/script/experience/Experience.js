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
            <span className='designation'>Senior Software Engineer</span>
          </div>
          <div className='card-content'>
            <h3 className='project-name'>Agilysys Stay</h3>
            <p>An intuitive, cloud-based property management solution for resorts and hotels. Keep business flowing effortlessly, on any operating system.</p>
            <ul>
              <li>Contribute core feature across stack.</li>
              <li>Involve in designing and implementing infrastructure changes.</li>
              <li>Develop frameworks to improve the quality of the product and increase the performance.</li>
              <li>Provide solution for issues related to feature development, dev environment.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;