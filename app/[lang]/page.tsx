import LangRedirect from './components/LangRedirect';
import {sectionRenderer} from './utils/section-renderer';
import {getPageBySlug} from "./utils/get-page-by-slug";
import Image from 'next/image';


export default async function RootRoute({params}: { params: { lang: string } }) {
    try {
      //const page = await getPageBySlug('home', params.lang)
      
      /* if (page.error && page.error.status == 401)
        throw new Error(
          'Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/'
        )

      if (page.data.length == 0 && params.lang !== 'en') return <LangRedirect />
      if (page.data.length === 0) return null
      const contentSections = page.data[0].attributes.contentSections */
      /* return contentSections.map((section: any, index: number) =>
        sectionRenderer(section, index)
      ) */
      return <>
        <div className="flex mt-10 items-center justify-center container mx-auto">
            <div className="px-6 text-center text-white md:px-12 mt-20 sm:mt-0 sm:pb-5">
              <h1 className="mb-8 text-3xl font-light tracking-tight md:text-6xl xl:text-7xl">
                The Best Sushi Bar <br /><span>in your <span className="text-[#DB7137]">City</span></span>
              </h1>
              <p className="text-white tracking-tight mb-9 sm:w-1/2 mx-auto">Way too much fish. But if it weren't for the fish, I'd have no identifiable personality whatsoever.</p>
              <a href="#_" className="mt-5 px-5 py-2.5 overflow-hidden group bg-[#DB7137] relative z-10  text-white">
                <span className="relative cursor-pointer ">OUR OFFER</span>
              </a>
              <Image className="mt-10  mx-auto sm:absolute z-20" src="/images/roll.png" width="170" height="227" alt="roll" />
            </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,64L120,101.3C240,139,480,213,720,234.7C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        </div>
      </>
    } catch (error: any) {
      window.alert('Missing or invalid credentials')
    }
}
