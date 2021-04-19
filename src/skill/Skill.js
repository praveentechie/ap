import SkillType from './SkillType';
import './skill.scss';

const feItems = [
  {name: 'React', imageSrc: '/ap/assets/img/react.png'},
  {name: 'Redux', imageSrc: '/ap/assets/img/redux.png'},
  {name: 'Vue', imageSrc: '/ap/assets/img/vue.png'},
  {name: 'Angular', imageSrc: '/ap/assets/img/angular.png'},
  {name: 'Javascript', imageSrc: '/ap/assets/img/javascript.png'},
  {name: 'JQuery', imageSrc: '/ap/assets/img/jquery.png'},
];

const beItems = [
  {name: 'Node JS', imageSrc: '/ap/assets/img/nodejs.png'},
  {name: 'Spring', imageSrc: '/ap/assets/img/spring.png'},
  {name: 'Java 8', imageSrc: '/ap/assets/img/java.png'},
  {name: 'Maven', imageSrc: '/ap/assets/img/maven.png'},
  {name: 'RabbitMQ', imageSrc: '/ap/assets/img/rabbitmq.png'}
];

const dbList = [
  {name: 'MongoDB', imageSrc: '/ap/assets/img/mongodb.png'},
  {name: 'PostgreSQL', imageSrc: '/ap/assets/img/postgresql.png'}
];

const htmlList = [
  {name: 'HTML5', imageSrc: '/ap/assets/img/html5.png'},
  {name: 'JSX', imageSrc: '/ap/assets/img/react.png'}
];

const cssList = [
  {name: 'CSS3', imageSrc: '/ap/assets/img/css3.png'},
  {name: 'SASS', imageSrc: '/ap/assets/img/sass.png'},
  {name: 'Bootstrap', imageSrc: '/ap/assets/img/bootstrap.png'}
];

const otherList = [
  {name: 'Github', imageSrc: '/ap/assets/img/github.png'},
  {name: 'Docker', imageSrc: '/ap/assets/img/docker.png'},
  {name: 'PM2', imageSrc: '/ap/assets/img/pm2.png'},
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