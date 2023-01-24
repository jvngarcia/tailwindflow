import Image from "next/image";



export default function Header(){
    return (
        <header className='container mx-auto py-2'>
            <div className="flex justify-between items-center">
                <Image src="/images/logotipo.png" alt="Logotipo de tailwindflow" width={ 200 } height={ 200 } />
                <nav className='flex text-slate-700'>
                    <a href="#" className='ml-5 hover:text-slate-900'>Inicio</a>
                    <a href="#" className='ml-5 hover:text-slate-900'>Componentes</a>
                    <a href="#" className='ml-5 hover:text-slate-900'>Generador de gradientes</a>
                    <span className="ml-5">|</span>
                    <a href="#" className='ml-5 hover:text-slate-900'>Github</a>
                    <span className='ml-5 hover:text-slate-900'>
                        <svg className="w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>
                    </span>
                </nav>
            </div>
        </header>
    )
}