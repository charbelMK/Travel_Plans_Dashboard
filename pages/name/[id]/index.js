import React from 'react'
import Head from 'next/head'
import Feed from '../../../components/Feed'
import Sidebar from '../../../components/Sidebar'

const defaultEndpoint = 'https://restcountries.com/v2/name'

export async function getServerSideProps({ query }) {
    const { id } = query;
    const res = await fetch(`${defaultEndpoint}/${id}`);
    const data = await res.json();

    return {
        props: {
        data
    }
  }
}


function Country({ data }) {
    console.log(data)
    
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
        
        {data.map(result => {
            const {name, flag, population, region, capital, subregion, borders, topLevelDomain, languages, currencies,  nativeName} = result;
            return (
                <div key={name} className="md:flex sm:inline items-center justify-center pl-5">
                    <div className="pr-5 py-3">
                        <img src={flag}
                        alt="Flag Image"
                        className="max-w-[450px] border-2"/>
                    </div>
                    <div className="px-3 py-3 inline text-sm xl:min-w-[500px] xl:pl-10">
                        <h1 className="font-extrabold text-uppercase">{name}</h1>
                        <div className="sm:inline md:flex py-5 md:space-x-3">
                            <div>
                                <p><b>Native </b>: {nativeName}</p>
                                <p><b>Population </b>: {population}</p>
                                <p><b>Region </b>: {region}</p>
                                <p><b>Sub Region </b>: {subregion}</p>
                                <p><b>Capital </b>: {capital}</p>
                            </div>
                            <div>
                                <p><b>Top Level Domain </b>: {topLevelDomain}</p>
                                {currencies.map(currency => {
                                    const {id, name} = currency;
                                    return (
                                        <p key={id}><b>Currencies </b>: {name}</p>
                                    )
                                })}
                                
                                {languages.map(language => {
                                    const {id, name} = language;
                                    return (
                                        <p key={id}><b>Languages </b>: {name}</p>
                                    )
                                })}
                                
                            </div>
                        </div>
                        <h5 className="font-bold">Boarder Contries:</h5>
                        <div className="grid grid-cols-2 sm:ml-auto md:grid-cols-4 py-3 items-center justify-center space-x-3">
                            {borders.map(country => {
                                const {id} = country;

                                return (
                                    <button key={id} className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-xs font-medium text-gray-700 hover:bg-blue-400" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                        {country}
                                    </button>
                                )
                            })}
                            
                        </div>
                    </div>
            </div>
            )
          })}
            
        
        </div>
      </main>
    </div>
    )
}

export default Country;
