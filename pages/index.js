import Head from 'next/head'
import ContentCard from '../components/ContentCard'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'

export default function Home() {
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
        <div className="grid grid-cols-1 sm:items-center sm:ml-auto space-x-4 md:grid-cols-3 xl:grid-cols-4 ">
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
        </div>
        </div>
      </main>
    </div>
  )
}
