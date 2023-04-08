import Navbar from "../Navbar/Navbar";
import styles from "./about.module.css";
import imgPerfil from "../../assets/img/IMG_0492.jpg";
import { datos } from "../../data/data";

function About() {
  return (
    <>
      <Navbar />
      <section>
        <div className={styles.containerAbout}>
          <img className={styles.perfilImg} src={imgPerfil} alt="PERFIL" />
        </div>
      </section>

      <section>
        <div className={styles.containerPerfil}>
          <h1 className={styles.perfilTitulo}>Carlos Villadiego</h1>
          {datos.map(  dato => <h4 className={styles.perfilSubTitulo}>{dato.profesion}</h4>)}
          {datos.map(  dato2 => <p>{dato2.perfilProfesional}</p>)}
          
        </div>
      </section>
    </>
  );
}

export default About;
