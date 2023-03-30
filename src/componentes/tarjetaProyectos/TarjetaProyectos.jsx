import styles from './tarjetaproyectos.module.css';
import {Link} from 'react-router-dom';
function TarjetaProyectos({nameclass, titulo }) {
  return (
    <div className={styles.containerTarjetaProyecto}>
      <div className={nameclass}>
       <h3 className={styles.titulo}>{titulo}
       
       </h3>
      
       
      </div>
    </div>
  );
}

export default TarjetaProyectos;
