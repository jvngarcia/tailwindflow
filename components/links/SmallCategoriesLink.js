import Link from "next/link";



export default function SmallCategoriesLink({ children, className, href = '/' }){
    return (
        <Link href={ href } className={ `bg-indigo-200 rounded-md ${ className }` }>
            <h6 className='text-indigo-700 text-center py-3 font-medium'>{ children }</h6>
        </Link>
    )
}