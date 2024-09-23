import { getSheetsData } from "../../lib/data"


const sheetData = await getSheetsData()


//need to change sheetData index with year for toprow and vals!!!
let topRow = sheetData[0].values[1]
let vals = []
for( let i=2; i<sheetData[0].values.length-2; i++){
    vals.push(sheetData[0].values[i])
}

export function Table() {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the users in your account including their name, title, email and role.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        type="button"
                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Add user
                    </button>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    {topRow.map((sheet) =>
                                        <th
                                            scope="col"
                                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                                        >
                                            {sheet}
                                        </th>
                                    )}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {vals.map((week) => (
                                    <tr key={week[0]}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                                            {week[0]}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{week[1]}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{week[2]}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{week[3]}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{week[4]}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{week[5]}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{week[6]}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{week[7]}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{week[8]}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{week[9]}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{week[10]}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{week[11]}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{week[12]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}