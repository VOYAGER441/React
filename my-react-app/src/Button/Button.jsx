import styles from "./Button.module.css"


function Button() {

    const CV={
        margin: "50px",
        padding: "10px",
        width:  "250px",
        color: "aquamarine",
        backgroundColor: "#390f80"
    }


    return (<>
        <button className={styles.button}>
            click me
        </button>
        <button style={CV}>
            Download My CV
        </button>

    </>
    );
}

export default Button