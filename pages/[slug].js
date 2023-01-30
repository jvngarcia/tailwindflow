import ColorfulBackground from "@/components/backgrounds/ColorfulBackground";
import MainBanner from "@/components/banners/MainBanner";
import TransparentButton from "@/components/buttons/TransparentButton";
import MainCardsGrid from "@/components/grids/MainCardsGrid";
import { supabase } from "@/lib/supabaseClient";
import Head from "next/head";
import Image from "next/image";




export default function Componente({ components, component, category }) {

    return (
        <>
            <Head>
                <title>{ component.name } - TailwindFlow</title>
                <meta name="description" content={ component.meta_description } />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/tailwindflow-favicon.png" />
            </Head>
            <main className='container mx-auto mb-10'>

                <ColorfulBackground />

                <MainBanner className='my-12 py-12'
                title={ component.name }
                subTitle={ component.description } />

                <div className="mt-12">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className='overflow-hidden w-full h-96 bg-indigo-100 flex items-center justify-center rounded-md'>
                            <Image src={ component.image } width={400} height={400} className="object-cover" alt={ component.name } />
                        </div>

                        <div className='w-full h-96 bg-slate-700 break-words rounded-md'>
                            <pre>
                                <code className="language-html">
                                    { component.component }
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
                
                <div className='mt-12'>
                
                    <MainCardsGrid components={ components } />
                    
                    {
                        components.length > 6 && 
                            <div className='flex justify-center my-12 py-12'>
                                <TransparentButton>Ver más</TransparentButton>
                            </div> 
                    }

                </div>

            </main>
        </>
    )
}


export async function getServerSideProps(context) {

    let { data: component } = await supabase.from( 'components' ).select().eq( 'slug', context.params.slug )
    let { data: category } = await supabase.from( 'categories' ).select( 'name' ).eq( 'id', component[0].category )
    let { data: components } = await supabase.from( 'components' ).select().eq( 'category', component[0].category ).neq( 'id', component[0].id ).range(0, 6)
    
    component = component[0] ?? null;
    category = category[0] ?? null;

    return {
      props: {
          component,
          components,
          category
      },
    }
  }

