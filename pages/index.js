import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'


export default function Home({newsResults, randomUsersResults}) {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen mx-auto">

        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed/>


        {/* Widgets */}

        <Widgets newsResults={newsResults.articles} randomUsersResults={randomUsersResults.results} />

      </main>

    </div>
  )
}

//API's

export async function getServerSideProps(){
  //What's happening section
  const newsResults = await fetch ("https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json").then((res)=>res.json());

  //who to follow section
  const randomUsersResults = await fetch("https://randomuser.me/api/?results=50&inc=name,login,picture").then((res)=>res.json());

  return{
    props:{
      newsResults,
      randomUsersResults,
    },
  };
}
