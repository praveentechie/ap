import { Link } from "react-router-dom";

const NabBar = () => {
  return (
    <nav className='nav-bar'>
      <ul className='side-nav'>
        <li className='brand-info'>
          <Link to='/'>
            <h4 className='brand-name'>Praveen Arunachalam</h4>
            <span className='brand-sub-title'>Full-stack developer</span>
          </Link>
        </li>
        <li className='nav-menu'>
          <i className='nav-menu-icon fa fa-user' aria-hidden='true'/>
          <Link className='nav-menu-text' to='/about'>About</Link>
        </li>
        <li className='nav-menu'>
          <i className='nav-menu-icon fa fa-laptop' aria-hidden='true'/>
          <Link className='nav-menu-text' to='/skills'>Skills</Link>
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

export default NabBar;