import ProjectItem from "./ProjectItem";
import "./project.scss";

const Project = () => {
  return(
    <section id='project' className='section project'>
      <header>
        <h1 className='page-header'>Projects</h1>
      </header>
      {false && <div style={{fontSize: '5rem', fontWeight: '200', height: '350px', width: '100%', textAlign: 'center'}}>Coming soon...</div>}
      <div className="row px-4 m-0">
        <ProjectItem/>
      </div>
    </section>
  );
};

export default Project;