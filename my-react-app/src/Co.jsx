
function Co(props) {

    if (props.login) {
        return (<>
            <h2>Hello!</h2>
            <h3>Welcome {props.name}</h3>
            <hr></hr>
        </>
        );
    }
    else {
        return (<><h2>Please Login First</h2 >
            <hr></hr>
        </>)
    }
}

export default Co;