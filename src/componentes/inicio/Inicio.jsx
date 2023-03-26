import Navbar from "../Navbar/Navbar";
import { datos } from "../../data/data";
import imgPerfil from '../../assets/img/ImgPerfil.svg';
import imgProyectos from '../../assets/img/ImgProyectos.svg';
import styles from './inicio.module.css';
const Inicio = () => {
  return (
    <>
      <Navbar />
      <section className={styles.containerImgPerfil}>
          <img className={styles.imgPerfil} src={imgPerfil} alt="IMG PERFIL" />
          {datos.map(dato => <div className={styles.containerPerfil}>
            <p>{dato.perfil}</p>
          </div> )}
      </section>
    </>
  );
};
export default Inicio;
