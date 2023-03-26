import styles from './boton.module.css';
function Boton({titulo}) {
  return (
   <>
    <button className={styles.buttonPrimary}> {titulo} </button>
   
   
   </>
  )
}

export default Boton;