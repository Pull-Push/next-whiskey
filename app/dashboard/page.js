import { getServerSideTodos, getCustomers, listMajors } from "../lib/data"
import { getSheetsData }  from "../lib/readSheet/index"


// let data = await getServerSideTodos();
// let customers = await getCustomers();
// let majors = await listMajors() 

export default async function Page() {
    
    // console.log('*********************')
    // console.log(data)
    // console.log(majors)
    // let res = await fetch('https://jsonplaceholder.typicode.com/todos');
    // let data = await res.json()
    const sheetData = await getSheetsData()
    console.log('sheet data:', sheetData)

    return (
        <div>
        {/* <ul>
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
        </ul> */}
        {/* <ul>
            {majors.map((student) =>(
                <li key={student.id}>
                    {cust.id}-{cust.name}
                </li>
            ))}
        </ul> */}
        </div>
    )
}