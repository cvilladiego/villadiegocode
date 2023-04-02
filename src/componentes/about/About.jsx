import Navbar from "../Navbar/Navbar";
import styles from "./about.module.css";
import imgPerfil from '../../assets/img/IMG_0492.jpg'

function About() {
  return (
    <>
      <Navbar />
      <section>
        <div className={styles.containerAbout}>
          <img className={styles.perfilImg} src={imgPerfil} alt="PERFIL" />
        </div>
      </section>
    </>
  );
}

export default About;
