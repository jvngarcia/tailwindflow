

export default function MainLink({ children, className = '', href }){
    return (
        <a href={ href } className={ `bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-9 rounded-md transition-all ${ className }` }>
            {children}
        </a>
    )
}