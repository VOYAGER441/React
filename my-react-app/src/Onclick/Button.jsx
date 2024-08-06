

function Button() {
    const handelOnclick = () => alert('ouch!!');
    const handelOnclick2 = (name) => alert({name}+' STOP CLICKING ME!!');
    return (
        <>
            {/* <button onClick={handelOnclick}>Click me 😁</button> */}
            <button onClick={handelOnclick2("mainak")}>Click me 😁</button>
        </>
    )
}

export default Button