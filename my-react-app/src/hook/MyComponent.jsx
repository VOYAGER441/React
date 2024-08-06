import React, { useState } from "react";
import Styles from './Com.module.css'


function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [role, setRole] = useState("User");
    const [isEmployed, setEmployed] = useState(false);
    const updateName = () => {
        setName(prompt("Enter the Name:"));
        setAge(prompt("Enter the Age:"));
        setRole(prompt("Enter the Role:"));
        setEmployed(true);
    }

    const [count, setIncrement] = useState(0);

    const increment = () => {
        setIncrement(count + 1);
    }
    const Decrement = () => {
        setIncrement(count - 1);
    }
    const reset = () => {
        setIncrement(0);
    }

    return (<>
        <div className="container">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Role: {role}</p>
            <p>IsEmployed: {isEmployed ? "YES" : "NO"}</p>
            <button onClick={updateName}>Update Info</button>
        </div>

        <hr></hr>
        <div  className="counter-container">
            <div>
            <h3>Counter:</h3>
                <p className={Styles.count}>{count}</p>
                <button onClick={increment}>For Increment</button>
                
                <button onClick={Decrement}>For Decrement</button>
                <button onClick={reset}>For Reset</button>
            </div>


        </div>
    </>);
}

export default MyComponent