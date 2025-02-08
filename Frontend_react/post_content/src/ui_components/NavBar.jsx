import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import { CiPizza } from "react-icons/ci";
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import clsx from 'clsx'
import { NavLink } from 'react-router-dom';
import styles from '../../public/css/NavBar.module.css'
import Switch from './Switch';


function NavBar( ) {
  const {isDarkMode} = useContext(ThemeContext)
  return (
    <div className={clsx(isDarkMode ? 'bg-dark' : 'bg-body-secondary')}>
      <Navbar expand="lg" className="container">
        <Container>
          <Navbar.Brand className={clsx(styles.logo,{'text-white': isDarkMode})} href="/">Devfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className={clsx({'bg-danger-subtle':isDarkMode})}>
              <CiPizza className={clsx(styles.icon, {'text-danger':isDarkMode})}/>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav" className={clsx(styles.corlor_text)}>
          <Nav className="me-auto">
              <NavLink to="/profile" 
                className={({isActive})=>clsx(styles.text_center,'d-inline', 'text-dark', 'link-underline', 'link-underline-opacity-0','ms-4', 'p-2','rounded', (isActive ? 'active': ''),{'text-white': isDarkMode})}
              >
                Hi! Đình Kiên
              </NavLink>
              <NavLink to="/logout" 
                className={({isActive})=>clsx(styles.text_center,'text-dark', 'link-underline', 'link-underline-opacity-0','ms-4', 'p-2','rounded', (isActive ? 'active': ''),{'text-white': isDarkMode})}
              >
                Logout
              </NavLink>
              <NavLink to="/login" 
                className={({isActive})=>clsx(styles.text_center,'text-dark', 'link-underline', 'link-underline-opacity-0','ms-4', 'p-2','rounded', (isActive ? 'active': ''),{'text-white': isDarkMode})}
              >
                Login
              </NavLink>
              <NavLink to="/login" 
                className={({isActive})=>clsx(styles.text_center,'text-dark', 'link-underline', 'link-underline-opacity-0','ms-4', 'p-2','rounded', (isActive ? 'active': ''),{'text-white': isDarkMode})}
              >
                Register
              </NavLink>
              <NavLink to="/login" 
                className={({isActive})=>clsx('fw-bold','text-dark', 'link-underline', 'link-underline-opacity-0','ms-4', 'p-2','rounded', styles.text_center, (isActive ? 'active': ''),{'text-white': isDarkMode})}
              >
                Create post
              </NavLink>
          </Nav>
          <Switch />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    
  );
}

export default NavBar;