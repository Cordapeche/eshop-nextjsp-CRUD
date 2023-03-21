import Head from 'next/head'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import pic from '../public/images/plant.jpg';

export default function Home() {

  const [articles, setArticles] = useState([]);
  
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const loadData = async () => {
      fetch('/api/admins')
        .then(async (res) => {
          const data = await res.json();
          setArticles(data);

        })
    };
    loadData();
  }, [router.isReady]);

  const { data: session } = useSession()

  function handleSignOut() {
    signOut()
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>

      {session ? User({ session, handleSignOut }) : Guest()}
    </div>
  )
}

// Guest
function Guest() {
  return (

    <>
      <Head>
        <title>The plant paradise</title>
        <meta name="keywords" content="nextjs" />
      </Head>
      <div>
        <div className='container-lg'>
          <h1 className='grand-title'>Recently updated</h1>
          <div className='row'>
            {
              articles.map(article => {
                return (
                  <div className='col col-12 col-lg-4 col-md-6'>
                    <div key={article._id}>

                      <div className='mycard'>
                        <Image src={pic} className='card-img-top' alt='some images' />
                        <div className='card-body'>
                          <div className='card-price-title'>
                            <h5 className='card-title'>{article.title}</h5>
                            <h5 className='card-title'>{article.price}<span>€</span></h5>
                          </div>
                          <p className='card-text'>{article.description}</p>

                        </div>
                      </div>

                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>




    // <main className="container mx-auto text-center py-20">
    //       <h3 className='text-4xl font-bold'>Guest Homepage</h3>

    //       <div className='flex justify-center'>
    //         <Link href={'/login'}><a className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Sign In</a></Link>
    //       </div>
    //   </main>
  )
}

// Authorize User
function User({ session, handleSignOut }) {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className='text-4xl font-bold'>Authorize User Homepage</h3>

      <div className='details'>
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>

      <div className="flex justify-center">
        <button onClick={handleSignOut} className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 bg-gray-50'>Sign Out</button>
      </div>

      <div className='flex justify-center'>
        <Link href={'/profile'}><a className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Profile Page</a></Link>
      </div>
    </main>
  )
}


export async function getServerSideProps({ req }) {
  const session = await getSession({ req })

  // if(!session){
  //   return {
  //     redirect : {
  //       destination: '/login',
  //       permanent: false
  //     }
  //   }
  // }

  return {
    props: { session }
  }
}