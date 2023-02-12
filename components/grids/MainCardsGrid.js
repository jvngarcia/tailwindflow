import Link from "next/link";
import MainCard from "../cards/MainCard";


export default function MainCardsGrid({ components, id = "components" }){
    return (
        <div id={ id } className='grid lg:grid-cols-4 md:grid-cols-3 mt-6 gap-6'>
            { components && components.map( (component, index) => ( 
                <Link key={ index } href={ component.slug }>
                    <MainCard key={index} mainImage={component.image} title={component.name} profileName="JVN García" profileImage="/images/profile-jvngarcia.jpeg" />
                </Link>
            ))}
        </div>
    )
}