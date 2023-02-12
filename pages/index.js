import ColorfulBackground from '@/components/backgrounds/ColorfulBackground'
import AdsBanner from '@/components/banners/AdsBanner'
import MainBanner from '@/components/banners/MainBanner'
import TransparentButton from '@/components/buttons/TransparentButton'
import MainCardsGrid from '@/components/grids/MainCardsGrid'
import SmallCategoriesGrid from '@/components/grids/SmallCategoriesGrid'
import Loader from '@/components/loader/Loader'
import { supabase } from '@/lib/supabaseClient'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

function Home({  categories, category = null }) {


  const [ categorySelected, setCategorySelected ] = useState( category ?? 'all' );
  const [ searchComponents, setSearchComponents ] = useState( [] );
  const [ loader, setLoader ] = useState( false );


  const getComponents = async ( slug ) => {

    setLoader( true );

    if( slug == 'all' ){
      let { data: search_component } = await supabase.from('components').select()
      setLoader( false );
      return setSearchComponents( search_component ?? [] );
    }

    // TODO: Mejorar para usar slug en vez de un ID
    let { data: search_component } = await supabase.from('components').select().eq('category', slug )
    setLoader( false );
    return setSearchComponents( search_component ?? [] );
  }

  useEffect(() => {
    getComponents( categorySelected )
  }, [categorySelected])

  return (
    <>
      <Head>
        <title>TailwindFlow</title>
        <meta name="description" content="Search and share all kinds of components created with tailwind" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/tailwindflow-favicon.png" />
      </Head>
      <main className='container mx-auto mb-10'>

        <ColorfulBackground />

        <MainBanner className='my-12 py-12'
          title="Search and share all kinds of components created with tailwind"
          subTitle="Use all the components you need for FREE and without the need to register 🤯"
          textButton="All components 👇"
          linkButton="#components" />
        
        <div className='mt-12 pt-12'>
          <AdsBanner title="Do you want to contribute to the project?" subTitle="You can leave a request, bug report or any information in the Issues section." textButton="👉 Request 👈" linkButton="https://github.com/jvngarcia/tailwindflow/issues" />
          
          <SmallCategoriesGrid categories={ categories } setCategorySelected={ setCategorySelected }  />
          

          {
            loader ?
              <div className='flex justify-center mt-12'>
                <Loader />
              </div> :
              
              searchComponents.length > 0 ? 
                <MainCardsGrid components={ searchComponents } /> :
                <div className='mt-6 flex justify-center text-slate-700'>
                  <div className='text-center'>
                    <Image src="/images/not_found.png" width={800} height={ 800 } alt="SIn resultados" />
                    <p className='mt-4'>No components found</p>
                  </div>
                </div>
            
          }
          


          {/* {
            searchComponents.length >= 6 && 
              <div className='flex justify-center my-12 py-12'>
                <TransparentButton>Ver más</TransparentButton>
              </div> 
          } */}

        </div>

      </main>
    </>
  )
}



export async function getServerSideProps(context) {

  // get route parameter
  const { category } = context.query
  let { data: categories } = await supabase.from('categories').select()

  return {
    props: {
      categories,
      category: category ?? null
    },
  }
}



export default Home;
