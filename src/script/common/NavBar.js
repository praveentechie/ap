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
          <Link className='nav-menu-text' to='/skills'>
            <i className='nav-menu-icon fa fa-laptop' aria-hidden='true'/>
            Skills
          </Link>
        </li>
        <li className='nav-menu'>
          <Link className='nav-menu-text' to='/experience'>
            <i className='nav-menu-icon fa fa-briefcase' aria-hidden='true'/>
            Experience
          </Link>
        </li>
        <li className='nav-menu'>
          <Link className='nav-menu-text' to='/project'>
            <i className='nav-menu-icon fa fa-puzzle-piece' aria-hidden='true'/>
            Projects
          </Link>
        </li>
        <li className='nav-menu'>
          <Link className='nav-menu-text' to='/award'>
            <i className='nav-menu-icon fa fa-trophy' aria-hidden='true'/>
            Awards
          </Link>
        </li>
        <li className='nav-menu'>
          <Link className='nav-menu-text' to='/education'>
            <i className='nav-menu-icon fa fa-graduation-cap' aria-hidden='true'/>
            Education
          </Link>
        </li>
        <li className='nav-menu'>
          <Link className='nav-menu-text' to='/contact'>
            <i className='nav-menu-icon fa fa-envelope-o' aria-hidden='true'></i>
            Contact
          </Link>
        </li>

      </ul>
    </nav>
  );
}

export default NavBar;