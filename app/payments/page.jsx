import { columns } from "./columns"
import { DataTable } from "./data-table"

async function getData() {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "cancelled",
            email: "q@example.com",
        },
        {
            id: "728ed52f",
            amount: 45,
            status: "pending",
            email: "a@example.com",
        },
        {
            id: "728ed52f",
            amount: 64,
            status: "pending",
            email: "b@example.com",
        },
        {
            id: "728ed52f",
            amount: 78,
            status: "cancelled",
            email: "c@example.com",
        },
        {
            id: "728ed52f",
            amount: 31,
            status: "pending",
            email: "mm@example.com",
        },
        {
            id: "728ed52f",
            amount: 54.65,
            status: "pending",
            email: "ml@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "mf@example.com",
        },
        {
            id: "728ed52f",
            amount: 87,
            status: "cancelled",
            email: "mew@example.com",
        },
        {
            id: "728ed52f",
            amount: 654,
            status: "cancelled",
            email: "mfd@example.com",
        },
        {
            id: "728ed52f",
            amount: 156,
            status: "pending",
            email: "mytre@example.com",
        },
        {
            id: "728ed52f",
            amount: 18910653,
            status: "pending",
            email: "mhujvsd@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "miovds@example.com",
        },
        
    ]
}

export default async function DemoPage() {
    const data = await getData()

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}