import styles from './tarjetaproyectos.module.css';

function TarjetaProyectos({nameclass, titulo, imagen, parrafo, urlProyecto}) {
  return (
    <div onClick={()=> window.open(urlProyecto)} className={styles.containerTarjetaProyecto}>
      <div className={nameclass}>
        <img src={imagen} />
       <h4>{titulo}</h4>
       <p> {parrafo} </p>
      
       
      </div>
    </div>
  );
}

export default TarjetaProyectos;
