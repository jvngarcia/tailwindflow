import SmallCategories from "../buttons/SmallCategories";



export default function SmallCategoriesGrid({ categories }){
    return (
        <div className='grid grid-cols-5 mt-6 gap-6'>
            <SmallCategories> Todo </SmallCategories>
            { categories && categories.map( (category, index) => (
                <SmallCategories key={index}> {category.name} </SmallCategories>
            ))}
        </div>
    )
}