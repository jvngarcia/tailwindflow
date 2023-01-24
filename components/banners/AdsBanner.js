

export default function AdsBanner({ title, subTitle, textButton, linkButton }){
    return (
        <div className='bg-slate-100 py-12 rounded'>
            <div className='container mx-auto flex flex-col items-center justify-center py-6'>
                <h2 className='text-3xl text-slate-700 font-bold'>{ title }</h2>   
                <p className='text-slate-700 text-center mt-4 text-xl'>{ subTitle }</p>
                <a href={ linkButton } target="_blank" className='mt-7 bg-slate-700 text-white py-3 px-6 rounded-lg hover:bg-slate-900'>{ textButton }</a>
            </div>
        </div>
    )
}