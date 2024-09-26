// import { getSheetsData }  from "../lib/data"
import { AllTable } from "../../ui/ww/allTable"

export default async function Page() {

// const sheetData = await getSheetsData()
// const jsondData = JSON.stringify(sheetData.values)

// console.log('sheet data:', sheetData)
return(
    <div>
        <AllTable />
    </div>
)


}