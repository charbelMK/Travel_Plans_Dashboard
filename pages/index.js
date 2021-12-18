import Head from 'next/head'
import ContentCard from '../components/ContentCard'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'

const defaultEndpoint = 'https://restcountries.com/v2/all'

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

export default function Home({ data }) {
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

        {/* Content Card */}
        <ul className="grid grid-cols-1 sm:items-center sm:ml-auto space-x-4 md:grid-cols-3 xl:grid-cols-4 ">
          {data.map(result => {
            const {name} = result;
            return (
              <li key={name}>
                <ContentCard result={result}/>
              </li>
            )
          })}
        </ul>
        </div>
      </main>
    </div>
  )
}
