import { getSheetsData, getScrubbedSheetData, getCondensedSheet } from "../../lib/data"
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'


const sheetData = await getSheetsData()

const ssd = await getScrubbedSheetData()
const indy = [ssd[0]]
// console.log(ssd)
//need to change sheetData index with year for toprow and vals!!!
// MIGHT NEED TO CHANGE FOR SEARCH AND PAGINATION - NAME CHANGE NEGATES THIS

export function SingleTable() {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        {indy[0].columns.map((col) => (
                                            <th key={col} scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                {col}
                                            </th>
                                        ))}

                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Location
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {indy[0].rows.map((data) => (
                                        <tr key={data}>
                                            {data.map((val) => (
                                                <td key={val} className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                    {val}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        //--------old table below this line------
        // <div className="px-4 sm:px-6 lg:px-8">
        //     <div className="mt-8 flow-root">
        //         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        //             <div className="inline-block min-w-full py-2 align-middle">
        //                 <table className="min-w-full divide-y divide-gray-300">
        //                     <thead>
        //                         <tr>
        //                             {topRow.map((sheet) =>
        //                                 <th
        //                                     scope="col"
        //                                     className="py-3.5 px-3 text-sm text-center font-semibold text-white-900 sm:pl-6 lg:pl-8"
        //                                     key={sheet}
        //                                 >
        //                                     {sheet}
        //                                 </th>
        //                             )}
        //                         </tr>
        //                     </thead>
        //                     <tbody className="divide-y divide-gray-200 bg-white">
        //                         {vals.map((week) => (
        //                             <tr key={week[0]}>
        //                                 <td className="whitespace-nowrap py-4 px-3 text-sm text-center font-medium text-gray-900 sm:pl-6 lg:pl-8">
        //                                     {week[0]}
        //                                 </td>
        //                                 {/* find better way to iterate through */}
        //                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{week[1]}</td>
        //                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{week[2]}</td>
        //                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{week[3]}</td>
        //                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{week[4]}</td>
        //                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{week[5]}</td>
        //                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{week[6]}</td>
        //                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{week[7]}</td>
        //                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{week[8]}</td>
        //                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{week[9]}</td>
        //                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{week[10]}</td>
        //                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{week[11]}</td>
        //                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{week[12]}</td>
        //                             </tr>
        //                         ))}
        //                     </tbody>
        //                     {/* nav starts below */}
        //                 </table>
        //                     <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
        //                         <div className="-mt-px flex w-0 flex-1">
        //                             <a
        //                                 href="#"
        //                                 className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        //                             >
        //                                 <ArrowLongLeftIcon aria-hidden="true" className="mr-3 h-5 w-5 text-gray-400" />
        //                                 Previous
        //                             </a>
        //                         </div>
        //                         <div className="hidden md:-mt-px md:flex">
        //                             <a
        //                                 href="#"
        //                                 className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        //                             >
        //                                 1
        //                             </a>
        //                             {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
        //                             <a
        //                                 href="#"
        //                                 aria-current="page"
        //                                 className="inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600"
        //                             >
        //                                 2
        //                             </a>
        //                             <a
        //                                 href="#"
        //                                 className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        //                             >
        //                                 3
        //                             </a>
        //                             <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
        //                                 ...
        //                             </span>
        //                             <a
        //                                 href="#"
        //                                 className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        //                             >
        //                                 8
        //                             </a>
        //                             <a
        //                                 href="#"
        //                                 className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        //                             >
        //                                 9
        //                             </a>
        //                             <a
        //                                 href="#"
        //                                 className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        //                             >
        //                                 10
        //                             </a>
        //                         </div>
        //                         <div className="-mt-px flex w-0 flex-1 justify-end">
        //                             <a
        //                                 href="#"
        //                                 className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        //                             >
        //                                 Next
        //                                 <ArrowLongRightIcon aria-hidden="true" className="ml-3 h-5 w-5 text-gray-400" />
        //                             </a>
        //                         </div>
        //                     </nav>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}