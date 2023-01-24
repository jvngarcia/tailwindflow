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
                    <span className='ml-5 hover:text-slate-900'>Modo Oscuro</span>
                </nav>
            </div>
        </header>
    )
}