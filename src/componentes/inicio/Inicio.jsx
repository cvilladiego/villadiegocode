import Navbar from "../Navbar/Navbar";
import { datos } from "../../data/data";
import imgPerfil from "../../assets/img/ImgPerfil.svg";
import imgProyectos from "../../assets/img/ImgProyectos.svg";
import html from "../../assets/logos/html-icon.svg";
import css from "../../assets/logos/css-icon.svg";
import sass from "../../assets/logos/sass-icon.svg";
import js from "../../assets/logos/javascrip-icon.svg";
import angular from "../../assets/logos/angular-icon.svg";
import reactIcon from "../../assets/logos/react-icon.svg";
import php from "../../assets/logos/php-icon.svg";
import wordpress from "../../assets/logos/wordpress-icon.svg";
import git from "../../assets/logos/git-icon.svg";
import styles from "./inicio.module.css";
import Boton from "../boton/Boton";
import TarjetaProyectos from "../tarjetaProyectos/TarjetaProyectos";
import PiePagina from "../footer/PiePagina";

const Inicio = () => {
  window.onload = ()=>{
    //funcion que muestra el loader y el container 
    setTimeout(()=>{
        const loader = document.getElementById('center');
      loader.style.display = 'none';
      const container = document.getElementById('container');
      container.removeAttribute('hidden');
    },1800)
  }
  return (
    <>
    {/* loader */}
    <div className={styles.centered} id="center">
    <div className={styles.blob1}></div>
	  <div className={styles.blob2}></div>
    </div>
    {/* fin del loader */}

      <div id="container" hidden>
        <Navbar />
        <section className={styles.containerImgPerfil}>
          <img className={styles.imgPerfil} src={imgPerfil} alt="IMG PERFIL" />
          {datos.map((dato) => (
            <div className={styles.containerPerfil}>
              <p>{dato.perfil}</p>
            </div>
          ))}

          <Boton titulo="Conoce más sobre mi" />
        </section>

        <section className={styles.containerHabilidades}>
          <div className={styles.containerHabilidadesTitulo}>
            <h2>Mis habilidades</h2>
          </div>

          <div className={styles.containerHabilidadesIcons}>
            <img className={styles.htmlIcon} src={html} alt="HTML" />
            <img className={styles.cssIcon} src={css} alt="CSS" />
            <img className={styles.sassIcon} src={sass} alt="SASS" />
            <img className={styles.jsIcon} src={js} alt="JAVASCRIPT" />
            <img className={styles.agularIcon} src={angular} alt="ANGULAR" />
            <img className={styles.reactIcon} src={reactIcon} alt="REACT" />
            <img className={styles.phpIcon} src={php} alt="PHP" />
            <img
              className={styles.wordpressIcon}
              src={wordpress}
              alt="WORDPRESS"
            />
            <img className={styles.gitIcon} src={git} alt="GIT" />
          </div>
        </section>

        <section className={styles.containerProyectos}>
          <div className={styles.containerProyectosTitulo}>
            <h2>Mis Proyectos</h2>
          </div>

          <div className={styles.containerImgProyecto}>
            <img
              className={styles.imgProyecto}
              src={imgProyectos}
              alt="IMG PROYECTOS"
            />
          </div>

          <div className={styles.containerProyectoInformacion}>
            {datos.map((dato) => (
              <p> {dato.informacionProyecto} </p>
            ))}
          </div>

          <TarjetaProyectos
            nameclass={styles.tarjtaProyecto}
            titulo="primera tarjeta"
          />
          <TarjetaProyectos
            nameclass={styles.tarjtaProyecto2}
            titulo="segunda tarjeta 2"
          />
          <TarjetaProyectos
            nameclass={styles.tarjtaProyecto3}
            titulo="segunda tarjeta 3"
          />
          <TarjetaProyectos
            nameclass={styles.tarjtaProyecto4}
            titulo="cuarta tarjeta"
          />

          <div className={styles.containerBotonProyectos}>
            <Boton titulo="Más proyectos aquí" />
          </div>
        </section>

        <PiePagina texto="Desarrollado por villadiegocode - Carlos Villadiego" />
      </div>
    </>
  );
};
export default Inicio;
