import styles from './boton.module.css';
function Boton({titulo}) {
  return (
   <>
    <button className={styles.button-primary}> {titulo} </button>
   
   
   </>
  )
}

export default Boton;