import styles from "./iCards.module.css";


function ICards(props) {

    return (
        <div className={styles.card}>
            <img className={styles.cardImg} src={props.src}></img>

            <h3>Name:{props.name}</h3>
            <h4>Role:{props.role}</h4>
            <p>Dec:{props.dec}</p>
        </div>
    );
}

export default ICards;