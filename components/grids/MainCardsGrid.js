import MainCard from "../cards/MainCard";


export default function MainCardsGrid(){
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 mt-6 gap-6'>
            <MainCard mainImage="/tailwindflow-favicon.png" title="Título del componente que puede ser largo" profileName="JVN García" profileImage="/tailwindflow-favicon.png" />
            <MainCard mainImage="/tailwindflow-favicon.png" title="Título del componente" profileName="JVN García" profileImage="/tailwindflow-favicon.png" />
            <MainCard mainImage="/tailwindflow-favicon.png" title="Título del componente" profileName="JVN García" profileImage="/tailwindflow-favicon.png" />
            <MainCard mainImage="/tailwindflow-favicon.png" title="Título del componente" profileName="JVN García" profileImage="/tailwindflow-favicon.png" />
            <MainCard mainImage="/tailwindflow-favicon.png" title="Título del componente" profileName="JVN García" profileImage="/tailwindflow-favicon.png" />
            <MainCard mainImage="/tailwindflow-favicon.png" title="Título del componente" profileName="JVN García" profileImage="/tailwindflow-favicon.png" />
            <MainCard mainImage="/tailwindflow-favicon.png" title="Título del componente" profileName="JVN García" profileImage="/tailwindflow-favicon.png" />
            <MainCard mainImage="/tailwindflow-favicon.png" title="Título del componente" profileName="JVN García" profileImage="/tailwindflow-favicon.png" />
        </div>
    )
}