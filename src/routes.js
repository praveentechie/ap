import { Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import AboutRoute from './about/about.route';
import SkillRoute from './skill/skill.route';
import ContactRoute from './contact/contact.route';
import EducationRoute from './education/education.route';

export default () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      {AboutRoute()}
      {SkillRoute()}
      {EducationRoute()}
      {ContactRoute()}
    </Switch>
  );
}