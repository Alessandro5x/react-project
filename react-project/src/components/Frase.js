import styles from './Frase.module.css'

function Frase(){

    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Esse é o componente Frase</p>
        </div>
    )

}
export default Frase