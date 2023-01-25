import MainCard from "../cards/MainCard";


export default function MainCardsGrid({ components }){
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 mt-6 gap-6'>
            { components && components.map( (component, index) => ( 
                <MainCard key={index} mainImage={component.image} title={component.name} profileName="JVN García" profileImage="/tailwindflow-favicon.png" />
            ))}
        </div>
    )
}