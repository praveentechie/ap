import SkillType from './SkillType';
import './skill.scss';

const feItems = [
  {name: 'React', imageSrc: `${window.repoName}/assets/img/react.png`},
  {name: 'Redux', imageSrc: `${window.repoName}/assets/img/redux.png`},
  {name: 'Vue', imageSrc: `${window.repoName}/assets/img/vue.png`},
  {name: 'Angular', imageSrc: `${window.repoName}/assets/img/angular.png`},
  {name: 'Javascript', imageSrc: `${window.repoName}/assets/img/javascript.png`},
  {name: 'JQuery', imageSrc: `${window.repoName}/assets/img/jquery.png`},
];

const beItems = [
  {name: 'Node JS', imageSrc: `${window.repoName}/assets/img/nodejs.png`},
  {name: 'Spring', imageSrc: `${window.repoName}/assets/img/spring.png`},
  {name: 'Java 8', imageSrc: `${window.repoName}/assets/img/java.png`},
  {name: 'Maven', imageSrc: `${window.repoName}/assets/img/maven.png`},
  {name: 'RabbitMQ', imageSrc: `${window.repoName}/assets/img/rabbitmq.png`}
];

const dbList = [
  {name: 'MongoDB', imageSrc: `${window.repoName}/assets/img/mongodb.png`},
  {name: 'PostgreSQL', imageSrc: `${window.repoName}/assets/img/postgresql.png`}
];

const htmlList = [
  {name: 'HTML5', imageSrc: `${window.repoName}/assets/img/html5.png`},
  {name: 'JSX', imageSrc: `${window.repoName}/assets/img/react.png`}
];

const cssList = [
  {name: 'CSS3', imageSrc: `${window.repoName}/assets/img/css3.png`},
  {name: 'SASS', imageSrc: `${window.repoName}/assets/img/sass.png`},
  {name: 'Bootstrap', imageSrc: `${window.repoName}/assets/img/bootstrap.png`}
];

const otherList = [
  {name: 'Github', imageSrc: `${window.repoName}/assets/img/github.png`},
  {name: 'Docker', imageSrc: `${window.repoName}/assets/img/docker.png`},
  {name: 'PM2', imageSrc: `${window.repoName}/assets/img/pm2.png`}
];

const Skill = () => {
  return (
    <section id='skill' className='section skill'>
      <header>
        <h1 className='page-header'>Skills</h1>
      </header>
      <div className='container'>
        <SkillType skillType='Javascript' skillItems={feItems} />
        <SkillType skillType='HTML' skillItems={htmlList} />
        <SkillType skillType='CSS' skillItems={cssList} />
        <SkillType skillType='Back-end' skillItems={beItems} />
        <SkillType skillType='Database' skillItems={dbList} />
        <SkillType skillType='Other' skillItems={otherList} />
      </div>
    </section>
  );
};

export default Skill;