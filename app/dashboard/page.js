import { getServerSideTodos, getCustomers } from "../lib/data"

let data = await getServerSideTodos();
let customers = await getCustomers();

export default async function Page() {
    
    // console.log('*********************')
    console.log(data)
    // let res = await fetch('https://jsonplaceholder.typicode.com/todos');
    // let data = await res.json()
    return (
        <div>
        <ul>
            {data.map((todo) => (
                <li key={todo.name}>
                    {todo.name}-{todo.country}</li>
            ))}
        </ul>
        <ul>
            {customers.map((cust) =>(
                <li key={cust.id}>
                    {cust.id}-{cust.name}
                </li>
            ))}
        </ul>
        </div>
    )
}