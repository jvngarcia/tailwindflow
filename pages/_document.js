import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <footer className='container mx-auto py-6 flex justify-center'>
        <div className='flex text-'>
          <p>JVN García</p>
          <p className='mx-2'>|</p>
          <p>2021</p>
        </div>
      </footer>
    </Html>
  )
}
