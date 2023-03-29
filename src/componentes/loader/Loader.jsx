import styles from './loader.module.css';
window.onload = ()=>{
    setTimeout(()=>{
    	const loader = document.getElementById('center');
		loader.style.display = 'none';
  },1800)
}

function Loader() {
  return (
    <div className ={styles.centered} id='center'>
        <div className = {styles.blob1}></div>
        <div className = {styles.blob2}></div>
    </div>
  )
}

export default Loader