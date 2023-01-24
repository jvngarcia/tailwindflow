import SmallCategories from "../buttons/SmallCategories";



export default function SmallCategoriesGrid(){
    return (
        <div className='grid grid-cols-5 mt-6 gap-6'>
            <SmallCategories> Todo </SmallCategories>
            <SmallCategories> Inputs </SmallCategories>
            <SmallCategories> Buttons </SmallCategories>
            <SmallCategories> Selects </SmallCategories>
            <SmallCategories> Cards </SmallCategories>
        </div>
    )
}