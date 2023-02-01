import Image from "next/image";


export default function MainCard({ mainImage, title, profileImage, profileName }){
    return (
        <div>
            <div className='overflow-hidden w-full h-48 bg-indigo-200 flex items-center justify-center rounded-md'>
                <Image src={ mainImage } width={310} height={230} className="object-cover" alt={ title } />
            </div>
            <div className='flex mt-3 items-center'>
                <div className='rounded-full w-10 h-10 bg-indigo-200 overflow-hidden flex justify-center items-center'>
                    <Image src={ profileImage } width={100} height={100} className="object-cover" alt={ profileName } />
                </div>
                <div className='ml-3 w-full truncate'>
                    <h5 className='text-slate-700 font-semibold text-lg truncate'>{ title }</h5>
                    <p className='text-slate-700 truncate text-sm'>@{ profileName }</p>
                </div>
            </div>
        </div>
    )
}