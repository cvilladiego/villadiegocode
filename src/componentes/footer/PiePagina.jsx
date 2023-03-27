import styles from "./footer.module.css";
function PiePagina({ texto }) {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.containerTextFooter}>
        <p>{texto}</p>
      </div>
    </div>
  );
}

export default PiePagina;
