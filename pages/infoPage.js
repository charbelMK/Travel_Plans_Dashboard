import React from 'react'
import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'

function infoPage() {
    return (
        <div className="">
      <Head>
        <title>Travel Plans Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar/>
        <div className="flex-grow sm:ml-[73px] xl:ml-[213px]">
        <Feed />
        <div className="md:flex sm:inline items-center justify-center pl-5">
            <div className="pr-5 py-3">
                <img src="https://flowbite.com/docs/images/blog/image-1.jpg"
                 alt="Flag Image"
                 className="max-w-[450px]"/>
            </div>
            <div className="px-3 py-3 inline text-sm xl:min-w-[500px] xl:pl-10">
                <h1 className="font-bold">Belgium</h1>
                <div className="sm:inline md:flex py-5 md:space-x-3">
                    <div>
                        <p><b>Native</b>: Belgie</p>
                        <p><b>Population</b>: 11,319,511</p>
                        <p><b>Region</b>: Europe</p>
                        <p><b>Sub Region</b>: Western Europe</p>
                        <p><b>Capital</b>: Brussels</p>
                    </div>
                    <div>
                        <p><b>Top Level Domain</b>: .be</p>
                        <p><b>Currencies</b>: Euro</p>
                        <p><b>Languages</b>: Dutch, French, German</p>
                    </div>
                </div>
                <h5 className="font-bold">Boarder Contries:</h5>
                <div className="flex py-3 space-2 items-center justify-center space-x-3">
                    <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-xs font-medium text-gray-700 hover:bg-blue-400" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        France
                    </button>

                    <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-xs font-medium text-gray-700 hover:bg-blue-400" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        Germany
                    </button>

                    <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-xs font-medium text-gray-700 hover:bg-blue-400" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        NetherLands
                    </button>
                </div>
            </div>
        </div>
        </div>
      </main>
    </div>
    )
}

export default infoPage
