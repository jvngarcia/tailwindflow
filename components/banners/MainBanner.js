import MainButton from "../buttons/MainButton";


export default function MainBanner({ className = '', title, subTitle, textButton, linkButton }){
    return (
        <div className={ `flex flex-col items-center justify-center ${ className }` }>
            <h1 className='text-5xl text-slate-700 text-center w-2/4 font-bold'>{ title }</h1>
            <p className='text-slate-700 text-center mt-4 text-xl'>{ subTitle }</p>
            <MainButton className="mt-7">{ textButton }</MainButton>
        </div>
    )
}