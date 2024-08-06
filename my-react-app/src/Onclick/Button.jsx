

function Button() {
    const handelOnclick = () => alert('ouch!!');
    let count = 0;
    const handelOnclick2 = (name) => {
        if (count < 3) {
        count++;
        alert(`${name} you are clicking me ${count} times`)
        }
        else { alert(`${name} STOP CLICKING ME!!`); }
    }

    const handelOnclick3=(e)=>e.target.textContent='fuck you🤘'

    return (
        <>
            <button onClick={handelOnclick}>Click me 😁</button>
            <button onClick={() => handelOnclick2("Mainak")}>Click me 😁</button>
            <button onClick={(e) => handelOnclick3(e)}>Click me 😁</button>

            


        </>
    )
}

export default Button