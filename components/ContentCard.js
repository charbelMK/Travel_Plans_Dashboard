import { CheckIcon, TrashIcon } from '@heroicons/react/outline'
import React from 'react'
import Link from 'next/link'

function ContentCard({ result }) {

    return (
       
    <div className=" mx-auto py-3 max-w-[240px]">
        
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <Link href="/name/[id]" as={`/name/${result.name}`}>
                <img className="rounded-t-lg rounded-b-lg hover:opacity-60" src={result.flag} alt=" Country Logo"/>
            </Link>
            <div className="p-5 bg-[#E5E5E5]">
                <Link href="/name/[id]" as={`/name/${result.name}`}>
                    <h5 className="text-gray-900 font-bold hover:opacity-60 cursor-pointer text-2xl tracking-tight mb-2 dark:text-white">{result.name}</h5>
                </Link>
                <p className="font-normal text-gray-700 mb-3 dark:text-gray-400"><b>Population : </b>{result.population}</p>
                <p className="font-normal text-gray-700 mb-3 dark:text-gray-400"><b>Capital : </b>{result.capital}</p>
                <p className="font-normal text-gray-700 mb-3 dark:text-gray-400"><b>Currency : </b></p>
                
                <div className="flex space-x-5">
                    <a href="#" className="text-white bg-gray-400 focus:bg-[#ffff] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm rounded-full ml-20 px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <TrashIcon className=" h-6 w-6"/>
                    </a>

                    <a href="#" className="text-white bg-gray-400 focus:bg-[#14C704] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm rounded-full ml-20 px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <CheckIcon className=" h-6 w-6 "/>
                    </a>
                </div>
                
            </div>
        </div>

        
    </div>
    )
}

export default ContentCard
