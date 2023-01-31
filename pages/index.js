import ColorfulBackground from '@/components/backgrounds/ColorfulBackground'
import AdsBanner from '@/components/banners/AdsBanner'
import MainBanner from '@/components/banners/MainBanner'
import TransparentButton from '@/components/buttons/TransparentButton'
import MainCardsGrid from '@/components/grids/MainCardsGrid'
import SmallCategoriesGrid from '@/components/grids/SmallCategoriesGrid'
import { supabase } from '@/lib/supabaseClient'
import Head from 'next/head'
import { useEffect, useState } from 'react'

function Home({ components, categories }) {


  const [ categorySelected, setCategorySelected ] = useState( 'all' );
  const [ searchComponents, setSearchComponents ] = useState( 'all' );


  const getComponents = async ( id ) => {

    if( id == 'all' ){
      let { data: search_component } = await supabase.from('components').select()
      return setSearchComponents( search_component );
    }

    let { data: search_component } = await supabase.from('components').select().eq('category', id )
    return setSearchComponents( search_component );
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
          subTitle="Utiliza todos los componentes que necesites de manera GRATUITA"
          textButton="Todos los componentes"
          linkButton="#componentes" />
        
        <div className='mt-12 pt-12'>
          <AdsBanner title="Título" subTitle="SubTítulo" textButton="Botón" linkButton="/" />
          
          <SmallCategoriesGrid categories={ categories } setCategorySelected={ setCategorySelected }  />
          

          { categorySelected != 'all' ? 
            <MainCardsGrid components={ searchComponents } /> :
            <MainCardsGrid components={ components } />  
          }


          {
            components.length >= 6 && 
              <div className='flex justify-center my-12 py-12'>
                <TransparentButton>Ver más</TransparentButton>
              </div> 
          }

        </div>

      </main>
    </>
  )
}



export async function getServerSideProps() {
  let { data: components } = await supabase.from('components').select()
  let { data: categories } = await supabase.from('categories') .select()

  return {
    props: {
      components,
      categories
    },
  }
}



export default Home;
