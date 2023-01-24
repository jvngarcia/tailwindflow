import AdsBanner from '@/components/banners/AdsBanner'
import MainBanner from '@/components/banners/MainBanner'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>TailwindFlow</title>
        <meta name="description" content="Busca y comparte todo tipo de componentes en tailwind" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/tailwindflow-favicon.png" />
      </Head>
      <main className='container mx-auto'>
        <MainBanner 
          className='my-12 py-12'
          title="Busca y comparte todo tipo de componentes creados con tailwind"
          subTitle="Utiliza todos los componentes que necesites de manera GRATUITA"
          textButton="Todos los componentes" />
        
        <div className='mt-12 pt-12'>
          <AdsBanner title="Título" subTitle="SubTítulo" textButton="Botón" linkButton="/" />
        </div>

      </main>
    </>
  )
}
