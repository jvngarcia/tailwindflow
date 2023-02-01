import Image from "next/image";
import Link from "next/link";



export default function Header(){
    return (
        <header className='container mx-auto py-2'>
            <div className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/images/logotipo.png" alt="Logotipo de tailwindflow" width={ 200 } height={ 200 } />
                </Link>
                <nav className='flex items-center text-slate-700'>
                    <Link href="/#componentes" className='ml-5 hover:text-slate-900'>Componentes</Link>
                    {/* <a href="#" className='ml-5 hover:text-slate-900'>Generador de gradientes</a> */}
                    <span className="ml-5">|</span>
                    <a href="https://github.com/jvngarcia/tailwindflow" target="_blank" className='ml-5 hover:text-slate-900 flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                            <path d="M14.5 0.75C12.6943 0.75 10.9063 1.10565 9.2381 1.79666C7.56988 2.48766 6.05409 3.50048 4.77728 4.77728C2.19866 7.35591 0.75 10.8533 0.75 14.5C0.75 20.5775 4.69625 25.7338 10.155 27.5625C10.8425 27.6725 11.0625 27.2463 11.0625 26.875V24.5513C7.25375 25.3763 6.4425 22.7088 6.4425 22.7088C5.81 21.1138 4.91625 20.6875 4.91625 20.6875C3.665 19.835 5.0125 19.8625 5.0125 19.8625C6.3875 19.9588 7.11625 21.2788 7.11625 21.2788C8.3125 23.3688 10.3337 22.75 11.1175 22.42C11.2413 21.5263 11.5988 20.9213 11.9838 20.5775C8.93125 20.2338 5.7275 19.0513 5.7275 13.8125C5.7275 12.2863 6.25 11.0625 7.14375 10.0863C7.00625 9.7425 6.525 8.3125 7.28125 6.45625C7.28125 6.45625 8.43625 6.085 11.0625 7.85875C12.1488 7.55625 13.3313 7.405 14.5 7.405C15.6687 7.405 16.8512 7.55625 17.9375 7.85875C20.5637 6.085 21.7188 6.45625 21.7188 6.45625C22.475 8.3125 21.9937 9.7425 21.8563 10.0863C22.75 11.0625 23.2725 12.2863 23.2725 13.8125C23.2725 19.065 20.055 20.22 16.9888 20.5638C17.4838 20.99 17.9375 21.8288 17.9375 23.1075V26.875C17.9375 27.2463 18.1575 27.6863 18.8587 27.5625C24.3175 25.72 28.25 20.5775 28.25 14.5C28.25 12.6943 27.8943 10.9063 27.2033 9.2381C26.5123 7.56988 25.4995 6.05409 24.2227 4.77728C22.9459 3.50048 21.4301 2.48766 19.7619 1.79666C18.0937 1.10565 16.3057 0.75 14.5 0.75Z" fill="#334155"/>
                        </svg>
                    </a>
                    {/* <span className='ml-5 hover:text-slate-900 flex items-end'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <path d="M25.9137 15.3746C25.8472 15.1604 25.7136 14.9733 25.5325 14.8409C25.3514 14.7086 25.1325 14.6381 24.9082 14.6398L24.6246 14.6914C22.7783 15.201 20.8297 15.2118 18.9779 14.7225C17.126 14.2333 15.437 13.2616 14.0833 11.9065C12.7296 10.5515 11.7595 8.86157 11.272 7.00922C10.7846 5.15688 10.7972 3.20838 11.3086 1.36251C11.3339 1.28774 11.3469 1.20939 11.3473 1.13048C11.3595 0.964117 11.3307 0.797297 11.2634 0.644677C11.1961 0.492057 11.0923 0.358312 10.9612 0.255197C10.8301 0.152083 10.6756 0.0827571 10.5114 0.0533131C10.3472 0.0238691 10.1783 0.0352089 10.0195 0.0863355C7.85239 0.693771 5.88204 1.85803 4.30449 3.4633C2.72695 5.06857 1.59719 7.05891 1.0276 9.23632C0.458013 11.4137 0.468446 13.7023 1.05786 15.8744C1.64728 18.0466 2.79513 20.0265 4.38725 21.6173C5.97936 23.2082 7.96024 24.3544 10.1328 24.9421C12.3054 25.5297 14.5941 25.5383 16.771 24.9669C18.9479 24.3956 20.9374 23.2642 22.5414 21.6854C24.1453 20.1065 25.308 18.1352 25.9137 15.9676C25.9785 15.7752 25.9785 15.567 25.9137 15.3746ZM13.5 23.3281C11.0302 23.3301 8.6339 22.4877 6.70866 20.9406C4.78342 19.3935 3.44492 17.2348 2.91519 14.8224C2.38547 12.4101 2.69636 9.88911 3.79629 7.67773C4.89622 5.46635 6.71909 3.69746 8.96251 2.66446C8.71977 4.60994 8.92445 6.58516 9.56093 8.43953C10.1974 10.2939 11.2489 11.9785 12.6352 13.3648C14.0216 14.7511 15.7061 15.8026 17.5605 16.4391C19.4149 17.0756 21.3901 17.2802 23.3356 17.0375C22.4634 18.9123 21.075 20.4998 19.3331 21.6139C17.5911 22.728 15.5678 23.3226 13.5 23.3281Z" fill="#334155"/>
                        </svg>
                    </span> */}
                </nav>
            </div>
        </header>
    )
}