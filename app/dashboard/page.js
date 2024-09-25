import { getAuctionWhiskies, getCustomers, listMajors, sampleTodos, getColumnData } from "../lib/data"



export default async function Page() {
    console.log('*********************')
    //whiskeyhunter api
    let data = await getAuctionWhiskies();
    //POSTGRES SQL DATA
    let customers = await getCustomers();
    //EXTERNAL JSON PLACEHUNTER API
    let todoData = await sampleTodos()
    // console.log(todoData)
    let colData = await getColumnData()
    // console.log(colData)
    return (
        <div>
            <ul>
                {data.map((whisk) => (
                    <li key={whisk.name}>
                        {whisk.name}-{whisk.country}</li>
                ))}
            </ul>
            <ul>
                {customers.map((cust) => (
                    <li key={cust.id}>
                        {cust.id}-{cust.name}
                    </li>
                ))}
            </ul>
            <ul>
                {todoData.map((todo) => (
                    <li key={todo.id}>
                        {todo.id}-{todo.title}-{todo.userId}
                    </li>
                ))}
            </ul>

        </div>
    )
}