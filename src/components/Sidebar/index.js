import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoV from '../../assets/images/logo-v.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faStore, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return <div className='nav-bar'>
    <Link to='/'>
      <img className='logo' src={LogoV} alt='App logo' />
    </Link>
    <nav>
      <NavLink exact='true' activeclassname='active' to='/'>
        <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
      </NavLink>
      <NavLink exact='true' className='about-link' activeclassname='active' to='/about'>
        <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
      </NavLink>
      <NavLink exact='true' className='bakery-link' activeclassname='active' to='/bakery'>
      <FontAwesomeIcon icon={faStore} color='#4d4d4e'/>
      </NavLink>
      <NavLink exact='true' className='contact-link' activeclassname='active' to='/contact'>
        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
      </NavLink>
    </nav>
    <ul>
      <li>
        <a 
          target='_blank'
          href='https://www.linkedin.com/in/vartikag-1309/' rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' /></a>
      </li>
      <li>
        <a 
          target='_blank'
          href='https://github.com/vartikag13' rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} color='#4d4d4e' /></a>
      </li>
    </ul>
  </div>
}

export default Sidebar;