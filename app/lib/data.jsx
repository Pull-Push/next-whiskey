import { sql } from "@vercel/postgres";
import {google} from 'googleapis';


export async function getAuctionWhiskies() {
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

export async function sampleTodos(){
    //This works to retrieve sample todo data
    let res = await fetch('https://jsonplaceholder.typicode.com/todos');
    let todoData = await res.json();
    return todoData;
}


export const getSheetsData = async () =>{
    const auth = new google.auth.GoogleAuth({
        credentials:{
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n")
        },

        scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"]
    })

    const sheets = google.sheets({version:"v4", auth: await auth.getClient()})
    // const range = "Year 1"
    const valueRanges = ['Year 1', 'Year 2']
    const range = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6', 'Year 7', 'Year 8', 'Year 9']
    // const range = ['Year 1']

    try {
        const response = await sheets.spreadsheets.values.batchGet({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            ranges: range
        })
        // console.log(response.data.valueRanges[8])
        return response.data.valueRanges
    } catch(error){
        console.error('Error fetching sheets data:', error)
        return []
    }
}

export async function getScrubbedSheetData(){
    const sheetData = await getSheetsData()
    // console.log(sheetData[0].values[2])
    let cleansedDataSheets = []
    // // console.log('data', sheetData)
    for ( let i = 0; i<sheetData.length; i++ ){
        cleansedDataSheets.push({sheetName:sheetData[i].range.slice(1,7), colums:sheetData[i].values[1], rows:[]})
        for( let j = 2; j<sheetData[i].values; j++){
            console.log('values', sheetData[i].values)
        }

    }
    console.log(cleansedDataSheets)
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