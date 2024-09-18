import { sql } from "@vercel/postgres";
export async function getServerSideTodos() {
    // THIS WORKS TO RETRIEVE WHISKEY DATA!! DON'T SCREW WITH
    let res = await fetch('https://whiskyhunter.net/api/distilleries_info/');
    let data = await res.json()
    return data;
}

export async function getCustomers() {
    // THIS WORKS TO RETRIEVE DATA FROM SQL DB
    let res = await sql`SELECT * FROM customers`;
    let customers = res.rows
    return customers;
}


// //BELOW CODE WORKS IN EXAMPLE
// export async function fetchInvoicesPages(query) {
//     try {
//         const count = await sql`SELECT COUNT(*)
//       FROM invoices
//       JOIN customers ON invoices.customer_id = customers.id
//       WHERE
//         customers.name ILIKE ${`%${query}%`} OR
//         customers.email ILIKE ${`%${query}%`} OR
//         invoices.amount::text ILIKE ${`%${query}%`} OR
//         invoices.date::text ILIKE ${`%${query}%`} OR
//         invoices.status ILIKE ${`%${query}%`}
//     `;

//         const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
//         return totalPages;
//     } catch (error) {
//         console.error('Database Error:', error);
//         throw new Error('Failed to fetch total number of invoices.');
//     }
// }