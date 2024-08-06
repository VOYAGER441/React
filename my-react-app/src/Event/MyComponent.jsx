import React, { useState } from "react";

function MyComponent() {

    const [name,setName]=useState('Guest')

    const updateName=(e)=>{
        setName(e.target.value)
    }
    return (<>
    <input value={name} onChange={(e)=>updateName(e)} type="text"/>
    <p>Name:{name}</p>
    </>); 
}

export default MyComponent;