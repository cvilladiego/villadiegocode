import Navbar from "../Navbar/Navbar";
import styles from "./about.module.css";
import imgPerfil from "../../assets/img/IMG_0492-removebg-preview.png";
import contactImg from '../../assets/logos/contact-us.svg';
import { datos } from "../../data/data";
import PiePagina from "../footer/PiePagina";





function About() {
  return (
    <>
      <Navbar />
      <section>
        <div className={styles.containerAboutImg}>
          <img src={imgPerfil} alt="IMAGEN PERFIL" />
         
        </div>
      </section>

      <section>
        <div className={styles.containerPerfil}>
          <h1 className={styles.perfilTitulo}>Carlos Villadiego</h1>
          {datos.map(  dato => <h4 className={styles.perfilSubTitulo}>{dato.profesion}</h4>)}
          {datos.map(  dato2 => <p>{dato2.perfilProfesional}</p>)}
          
        </div>
        
      </section>

      <section>
        <div className={styles.containerTarjetaAbout}>
          <div className={styles.tarjetaContacto}>
            <img src={contactImg} alt="IMAGEN CONTACTO" />
            <h4>HABLEMOS..!</h4>
            <p>+573007462735</p>
            <p>carlovinar93@gmail.com</p>
          </div>

        </div>
      </section>
      <PiePagina texto="Desarrollado por villadiegocode - Carlos Villadiego" />
      

    </>
    
  );
}

export default About;
