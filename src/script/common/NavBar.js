import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className={`${props.classes} nav-bar`}>
      <ul className='side-nav'>
        <li className='brand-info'>
          <Link to='/'>
            <div className='contact-card'>
              <img src={`${window.repoName}/ap.png`} className='avatar' alt='Praveen Arunachalam'/>
            </div>
            <h4 className='brand-name'>Praveen Arunachalam</h4>
            <span className='brand-sub-title sub-title'>Full-stack web developer</span>
          </Link>
        </li>
        <li className='nav-menu'>
          <i className='nav-menu-icon fa fa-laptop' aria-hidden='true'/>
          <Link className='nav-menu-text' to='/skills'>Skills</Link>
        </li>
        <li className='nav-menu'>
          <i className='nav-menu-icon fa fa-industry' aria-hidden='true'/>
          <Link className='nav-menu-text' to='/experience'>Experience</Link>
        </li>
        <li className='nav-menu'>
          <i className='nav-menu-icon fa fa-graduation-cap' aria-hidden='true'/>
          <Link className='nav-menu-text' to='/education'>Education</Link>
        </li>
        <li className='nav-menu'>
          <i className='nav-menu-icon fa fa-envelope-o' aria-hidden='true'></i>
          <Link className='nav-menu-text' to='/contact'>Contact</Link>
        </li>

      </ul>
    </nav>
  );
}

export default NavBar;