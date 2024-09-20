import { getSheetsData }  from "../lib/data"



export default async function Page() {

const sheetData = await getSheetsData()
// const jsondData = JSON.stringify(sheetData.values)

console.log('sheet data:', sheetData)
return(
    <div>
        <ul>
            {sheetData.map((data) => (
                <li key={data.range}>
                    {data.range.slice(1,7)}-Week{data.values[2][0]}-{data.values[2][1]}</li>
            ))}
        </ul>
    </div>
)


}