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
      <main>
        <h1 className="text-4xl font-bold">Hola mundo</h1>
      </main>
    </>
  )
}
