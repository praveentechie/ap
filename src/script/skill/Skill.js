import SkillType from './SkillType';
import TechSkillModel from './TechSkillModel';
import './skill.scss';

const feItems = [
  new TechSkillModel('React', '/assets/img/react.png', 2016),
  new TechSkillModel('Redux', '/assets/img/redux.png', 2016),
  new TechSkillModel('Vue JS', '/assets/img/vue.png', 2020),
  new TechSkillModel('Angular', '/assets/img/angular.png', 2019),
  new TechSkillModel('Javascript', '/assets/img/javascript.png', 2014),
  new TechSkillModel('JQuery', '/assets/img/jquery.png', 2014)
];

const beItems = [
  new TechSkillModel('Node JS', '/assets/img/nodejs.png', 2017),
  new TechSkillModel('Spring', '/assets/img/spring.png', 2018),
  new TechSkillModel('Java 8', '/assets/img/java.png', 2016),
  new TechSkillModel('Maven', '/assets/img/maven.png', 2018),
  new TechSkillModel('RabbitMQ', '/assets/img/rabbitmq.png', 2019)
];

const dbList = [
  new TechSkillModel('MongoDB', '/assets/img/mongodb.png', 2018),
  new TechSkillModel('PostgreSQL', '/assets/img/postgresql.png', 2020)
];

const htmlList = [
  new TechSkillModel('HTML5', '/assets/img/html5.png', 2014),
  new TechSkillModel('JSX', '/assets/img/react.png', 2016)
];

const cssList = [
  new TechSkillModel('CSS3', '/assets/img/css3.png', 2014),
  new TechSkillModel('SASS', '/assets/img/sass.png', 2015),
  new TechSkillModel('Bootstrap', '/assets/img/bootstrap.png', 2014)
];

const otherList = [
  new TechSkillModel('GitHub', '/assets/img/github.png', 2014),
  new TechSkillModel('Docker', '/assets/img/docker.png', 2018),
  new TechSkillModel('PM2', '/assets/img/pm2.png', 2018)
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