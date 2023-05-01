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
import angulartarjeta from '../../assets/logos/angular-tarjeta.svg';
import jstarjeta from '../../assets/logos/javascript-tarjeta.svg';
import htmltarjeta from '../../assets/logos/html5-tarjeta.svg';
import csstarjeta from '../../assets/logos/css-tarjeta.svg';
import PiePagina from "../footer/PiePagina";
const Inicio = () => {
 

 
  return (
    <>

      <div id="container">
        <Navbar />
        <section className={styles.containerImgPerfil}>
          <img className={styles.imgPerfil} src={imgPerfil} alt="IMG PERFIL" />
          {datos.map((dato) => (
            <div key={dato.id} className={styles.containerPerfil}>
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
              <p>  {dato.informacionProyecto} </p>
              
              
            ))}
          </div>

          <TarjetaProyectos
            nameclass={styles.tarjtaProyecto}
            titulo="RICK Y MORTHY"
            imagen={angulartarjeta}
            parrafo="Maravillosa web en Angular consuminendo la API de Rick and Morthy"
            urlProyecto='#'
          />
          <TarjetaProyectos
            nameclass={styles.tarjtaProyecto2}
            titulo="TODOPELISXD"
            imagen={jstarjeta}
            parrafo='Increible web creada con Javascript, HTML y CSS puros, consumiendo la API de TheMovieDB'
            urlProyecto='https://app-peliculas-e2783.firebaseapp.com/'
          />
          <TarjetaProyectos
            nameclass={styles.tarjtaProyecto3}
            titulo="WEB VILLADIEGO"
            imagen={htmltarjeta}
            parrafo='Una web desarrollada con HTML y CSS puro y duro, muestra información sobre mi perfil y mis conocimientos '
            urlProyecto='https://cvilladiego.github.io/'
          />
          <TarjetaProyectos
            nameclass={styles.tarjtaProyecto4}
            titulo="BATATABIT"
            imagen={csstarjeta}
            parrafo='Mi primera web creada con CSS y HTML puros, utilizando metologia BEM, muestra información quemada sobre divisas virtuales'
            urlProyecto='#'
          />

          <div className={styles.containerBotonProyectos}>
            <Boton titulo="Más proyectos en github" urlgithub='https://github.com/cvilladiego' />
          </div>
        </section>

        <PiePagina texto="Desarrollado por villadiegocode - Carlos Villadiego" />
      </div>
    </>
  );
};
export default Inicio;
