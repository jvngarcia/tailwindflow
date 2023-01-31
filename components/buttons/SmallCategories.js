

export default function SmallCategories({ children, className }){
    return (
        <div className={ `bg-indigo-200 rounded-md ${ className }` }>
            <h6 className='text-indigo-700 text-center py-3 font-medium'>{ children }</h6>
        </div>
    )
}