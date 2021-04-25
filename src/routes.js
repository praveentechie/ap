import { Route, Switch } from 'react-router-dom';
import Home from './script/home/Home';
import SkillRoute from './script/skill/skill.route';
import ContactRoute from './script/contact/contact.route';
import EducationRoute from './script/education/education.route';
import ExperienceRoute from './script/experience/experience.route';

const AppRoute = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      {SkillRoute()}
      {ExperienceRoute()}
      {EducationRoute()}
      {ContactRoute()}
    </Switch>
  );
}

export default AppRoute;