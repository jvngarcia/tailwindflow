

export default function AdsBanner({ title, subTitle, textButton, linkButton }){
    return (
        <div className='bg-indigo-200 py-12 rounded-md px-8'>
            <div className='container py-6'>
                <h2 className='text-3xl text-slate-700 font-bold'>{ title }</h2>   
                <p className='text-slate-700 mt-4 text-xl'>{ subTitle }</p>
                <div className="mt-7">
                    <a href={ linkButton } target="_blank" className='mt-12 bg-slate-700 text-white py-3 px-6 rounded-lg hover:bg-slate-900' rel="noreferrer">{ textButton }</a>
                </div>
            </div>
        </div>
    )
}