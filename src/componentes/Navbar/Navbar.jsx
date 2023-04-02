import styles from "./navbar.module.css";
import logo from "../../assets/logos/logo_menu.svg";
import followTwitter from '../../assets/logos/follow-twitter.svg';
import followLinkedin from '../../assets/logos/follow-linkedin.svg';
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav role={"navigation"}>
      <div className={styles.menuToggle}>
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>

        <ul className={styles.menu}>
          <li>
            <Link to={'/'}>Inicio</Link>
           
          </li>
          
          <li>
           <Link to={'about'}>Sobre mi</Link>
          </li>
          
         
        </ul>
      </div>

      <div className={styles.containerLogo}>
        <img src={logo} alt="LOGO"className={styles.logo} />
      </div>

      <div className={styles.containerFollow}>
        <img className={styles.logoFollow} src={followTwitter} alt="Twitter" />
        <img className={styles.logoFollow} src={followLinkedin} alt="LinkedIn" />
      </div>
    </nav>
  );
};

export default Navbar;
