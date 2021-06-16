import { useState } from "react";

const ProjectItem = () => {
  const [revealStack, setRevealStack] = useState(false);

  const toggleStack = () => {
    setRevealStack(!revealStack);
  }

  return (
    <div className='project-item col-12 col-sm-6 col-md-4'>
      <div className='col-12 p-0 project-item-wrapper'>
        <div className='project-image col-12 p-0' onClick={toggleStack}>
          <img className='image-view' src={`${window.repoName}/assets/img/proj_angular8.png`}></img>
        </div>
        <div className='project-desc col-12' onClick={toggleStack}>
          <i className='fa fa-info-circle float-right'></i>
          <h4>All about Angular 8</h4>
          <p className='project-expl'>Experimental app based on Angular 8 featuring development concepts and demo applications.</p>
        </div>
        <div className={`project-stack sub-title ${revealStack ? 'reveal' : ''}`}>
          <h4>
            <i className='fa fa-close float-right' onClick={toggleStack} />
            <span>Accomplishments</span>
          </h4>
          <ul className='stack-details'>
            <li>Angular 8 Framework</li>
            <li>Responsive design with Bootstrap</li>
            <li>Reusable Toast notification component</li>
            <li>Simple Parallax effect</li>
          </ul>
          <div className='stack-footer'>
            <a href='https://angular-8.herokuapp.com/home' target='_blank' className='link-wrapper' title='Visit site'>
              <i className='fa fa-external-link' />
            </a>
            <a href='https://github.com/praveentechie/angular/tree/master/angular8/angular-base' target='_blank' className='link-wrapper' title='View source'>
              <i className='fa fa-github' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;