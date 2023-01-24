import ColorfulBackground from '@/components/backgrounds/ColorfulBackground'
import AdsBanner from '@/components/banners/AdsBanner'
import MainBanner from '@/components/banners/MainBanner'
import SmallCategories from '@/components/buttons/SmallCategories'
import TransparentButton from '@/components/buttons/TransparentButton'
import MainCard from '@/components/cards/MainCard'
import MainCardsGrid from '@/components/grids/MainCardsGrid'
import SmallCategoriesGrid from '@/components/grids/SmallCategoriesGrid'
import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
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
          textButton="Todos los componentes" />
        
        <div className='mt-12 pt-12'>
          <AdsBanner title="Título" subTitle="SubTítulo" textButton="Botón" linkButton="/" />
          
          <SmallCategoriesGrid />

          <MainCardsGrid />

          <div className='flex justify-center my-12 py-12'>
            <TransparentButton>Ver más</TransparentButton>
          </div>

        </div>

      </main>
    </>
  )
}
