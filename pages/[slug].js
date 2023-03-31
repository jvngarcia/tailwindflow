import ColorfulBackground from "@/components/backgrounds/ColorfulBackground";
import MainBanner from "@/components/banners/MainBanner";
import MainCardsGrid from "@/components/grids/MainCardsGrid";
import { supabase } from "@/lib/supabaseClient";
import Head from "next/head";
import Image from "next/image";
import MainMarkdown from "@/components/markdown/MainMarkdown";
import SmallCategoriesLink from "@/components/links/SmallCategoriesLink";


export default function Componente({ components, component, category }) {

    const copyCode = () => {
        navigator.clipboard.writeText(component.component);

        alert("Copied to clipboard");
    }



    return (
        <>
            <Head>
                <title>{ `${ component.name } - TailwindFlow` }</title>
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

                    <div className="grid md:grid-cols-2 gap-6">

                        <div className='flex mt-3 items-center'>
                            <div className='rounded-full w-10 h-10 overflow-hidden flex justify-center items-center'>
                                <Image src="/images/profile-jvngarcia.jpeg" width={100} height={100} className="object-cover" alt="JVN García" />
                            </div>
                            <div className='ml-3 w-full truncate'>
                                <h5 className='text-slate-700 font-semibold text-lg truncate'>JVN García</h5>
                                <p className='text-slate-700 truncate text-sm'>FullStack Developer</p>
                            </div>
                        </div>

                        <div className='flex justify-end mt-3 items-center'>
                            <SmallCategoriesLink href={ `/?category=${ category.id }` } className="w-40">{ category.name }</SmallCategoriesLink>
                        </div>

                        <div className='overflow-hidden w-full h-96 bg-white flex items-center justify-center rounded-md'>
                            <Image src={ component.image } width={400} height={400} className="object-cover" alt={ component.name } />
                        </div>

                        <div className='w-full h-96 bg-slate-100 break-words rounded-md relative'>
                            <MainMarkdown content={ component.component } />
                            <button onClick={ () => copyCode() } className="absolute bottom-6 right-5 text-white">
                                <svg className="w-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className='mt-6'>
                
                    <MainCardsGrid components={ components } />

                </div>

            </main>
        </>
    )
}


export async function getServerSideProps(context) {
    
    let { data: component } = await supabase.from( 'components' ).select().eq( 'slug', context.params.slug )
    let { data: category } = await supabase.from( 'categories' ).select( 'id, name' ).eq( 'id', component[0].category )
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

