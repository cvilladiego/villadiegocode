import styles from './boton.module.css';
function Boton({titulo, urlgithub}) {
  return (
   <>
    <button onClick={()=> window
    .open(urlgithub)} className={styles.buttonPrimary}> {titulo} </button>
   
   
   </>
  )
}

export default Boton;