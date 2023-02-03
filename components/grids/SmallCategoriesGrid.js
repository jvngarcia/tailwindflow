import SmallCategories from "../buttons/SmallCategories";



export default function SmallCategoriesGrid({ categories, setCategorySelected }){

    return (
        <div className='grid grid-cols-5 mt-6 gap-6'>
            <SmallCategories setState={ setCategorySelected } slug="all"> All </SmallCategories>
            { categories && categories.map( (category, index) => (
                <SmallCategories key={index} setState={ setCategorySelected } slug={ category.id } > {category.name} </SmallCategories>
            ))}
        </div>
    )
}