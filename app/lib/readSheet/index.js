import {google} from 'googleapis';

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