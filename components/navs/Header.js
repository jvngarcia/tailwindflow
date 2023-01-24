import Image from "next/image";



export default function Header(){
    return (
        <header className='container mx-auto py-2'>
            <div className="flex justify-between items-center">
                <Image src="/images/logotipo.png" alt="Logotipo de tailwindflow" width={ 200 } height={ 200 } />
                <nav className='flex'>
                    <a href="#" className='ml-5'>Inicio</a>
                    <a href="#" className='ml-5'>Componentes</a>
                    <a href="#" className='ml-5'>Generador de gradientes</a>
                    <span className="ml-5">|</span>
                    <a href="#" className='ml-5'>Github</a>
                    <span className='ml-5'>Modo Oscuro</span>
                </nav>
            </div>
        </header>
    )
}