import Navbar from "../Navbar/Navbar";
import { datos } from "../../data/data";
import imgPerfil from '../../assets/img/ImgPerfil.svg';
import imgProyectos from '../../assets/img/ImgProyectos.svg';
import styles from './inicio.module.css';
import Boton from "../boton/Boton";

const Inicio = () => {
    const keys = [3,6,9,7];
  return (
    <>
      <Navbar />
      <section className={styles.containerImgPerfil}>
          <img className={styles.imgPerfil} src={imgPerfil} alt="IMG PERFIL" />
          {datos.map(dato => <div className={styles.containerPerfil}>
            <p>{dato.perfil}</p>
          </div> )}
          
          <Boton titulo='Conoce más sobre mi'/>
      </section>

      <section className={styles.containerHabilidades}>
        <div className={styles.containerHabilidadesDiv}>
          {/* PENDIENTE CREAR SISTEMA DE GRILLAS */}

        </div>

      </section>
    </>
  );
};
export default Inicio;
