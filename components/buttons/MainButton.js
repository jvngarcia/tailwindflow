
export default function MainButton({ className = '', children }){
    return (
        <button className={ `bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-9 rounded ${ className }` }>
            {children}
        </button>
    )
}