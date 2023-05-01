import styles from './menu.module.css';
import { Outlet, Link } from "react-router-dom";
function Menu() {
  return (
    <div className={styles.containerMenuToggle}>
    <ul>
      <li>
      <Link to={'/'}>Inicio</Link>
      </li>

      <li>
       <Link to={'/about'}>Sobre mi</Link>
      </li>

      <li>
        <a href="#">Proyectos</a>
      </li>

      <li>
        <a href="#">Contacto</a>
      </li>
    </ul>
  </div>

  )
}

export default Menu