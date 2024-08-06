import  './List.module.css';


function Lists(props) {

    

    // fruits.sort((a,b)=> a.name.localeCompare(b.name))//for string sort
    // fruits.sort((a, b) => a.cal - b.cal)//for number sort
    // fruits.sort((a, b) => a.id - b.id)
    //use some filter method


    const items=props.items;
    const category=props.category;


    // const listItems = fruits.map(item => <li>{item}</li>);
    const listItems = items.map(item => <li key={item.id}  > {item.name}:&nbsp;<b>{item.cal}</b></li >);

    return (<>
        <h2>{category}</h2>
    <ul>{listItems}</ul></>)
}

export default Lists;