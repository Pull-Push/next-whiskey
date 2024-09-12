export default async function Page() {
    let res = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await res.json()
    return (
        <ul>
            {data.map((todo) => (
                <li key={todo.id}>
                    {todo.id}-{todo.title}</li>
            ))}
        </ul>
    )
}