import Link from "next/link";


export default function TransparentLink({ href, className }){
    return (
        <Link href={ href } className={ `bg-transparent hover:bg-slate-700 text-slate-700 hover:text-white py-3 px-9 rounded-md border-2 border-slate-700 transition-all ${ className }` }>
            {children}
        </Link>
    )
}