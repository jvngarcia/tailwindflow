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
        <meta name="description" content="Busca y comparte todo tipo de componentes en tailwind" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/tailwindflow-favicon.png" />
      </Head>
      <main className='container mx-auto mb-10'>

        <ColorfulBackground />

        <MainBanner className='my-12 py-12'
          title="Busca y comparte todo tipo de componentes creados con tailwind"
          subTitle="Utiliza todos los componentes que necesites de manera GRATUITA y sin necesidad de registrarte 🤯"
          textButton="Todos los componentes 👇"
          linkButton="#componentes" />
        
        <div className='mt-12 pt-12'>
          <AdsBanner title="¿Quieres aportar al proyecto?" subTitle="Puedes dejar una solicitud, reporte de error o cualquier información en el apartado Issues." textButton="👉 Solicita 👈" linkButton="https://github.com/jvngarcia/tailwindflow/issues" />
          
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
                    <Image src="/images/not_found.png" width={800} height={ 800 }/>
                    <p className='mt-4'>No se han encontrado resultados</p>
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
