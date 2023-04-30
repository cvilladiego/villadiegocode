import styles from "./navbar.module.css";
import logo from "../../assets/logos/logo_menu.svg";
import followTwitter from '../../assets/logos/follow-twitter.svg';
import followLinkedin from '../../assets/logos/follow-linkedin.svg';
import followWhatsapp from '../../assets/logos/whatsapp.svg';
import menuBurguer from "../../assets/logos/menu-hamburger.svg";
import {Link} from 'react-router-dom'
import { useState } from "react";
import Menu from "../menu/Menu";
const Navbar = () => {
 const [showdiv, setShowDiv] =  useState(false);
 const toogleMenu = ()=>{
  setShowDiv(!showdiv);

 }
 
  return (
    
    <nav className={styles.menu}>
      <div className={styles.containerMenuLogo}>
        <img src={logo} alt="LOGO" />
      </div>

      <div className={styles.containerMenuFollow}>
        <img src={followLinkedin} alt="LINKEDIN" />
        <img src={followTwitter} alt="TWITTER" />

      </div>

    <div className={styles.containerMenuBurguer}>
      <img src={menuBurguer} alt="MENU" onClick={toogleMenu} />
      { showdiv && <Menu/>}
      
    </div>
    </nav>
   

  );
};

export default Navbar;
