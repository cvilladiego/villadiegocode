import styles from './tarjetaproyectos.module.css';
function TarjetaProyectos({nameclass, titulo}) {
  return (
    <div className={styles.containerTarjetaProyecto}>
      <div className={nameclass}>
       <h5 className={styles.titulo}>{titulo}</h5>
      
       
      </div>
    </div>
  );
}

export default TarjetaProyectos;
