import Navbar from "./Navbar";

import { getStrapiMedia } from "../utils/api-helpers";

interface NavLink {
    id: number;
    url: string;
    newTab: boolean;
    text: string;
}
interface NavbarInterface {
    links : Array<NavLink>;
    logoUrl : string
}

interface Button {
    id: number;
    url: string;
    newTab: boolean;
    text: string;
}

interface Media {
    data: {
        id: string,
        attributes: {
            url: string
        }
    }
}

interface HeroProps {
    id: string;
    title: string;
    description: string;
    bgHero: Media;
    picture: Media;
    button: Button;
}

export default function HeaderSection({
    navbar,
    data
}:{
    navbar : NavbarInterface;
    data : HeroProps;
}) {
    const navbarLogoUrl = getStrapiMedia(
        navbar.logoUrl
    );

    const bgHeroUrl = getStrapiMedia(
        data.bgHero.data.attributes.url
    );

    return (
        <>
            <section className="mb-20 overflow-hidden">
                <div className="relative overflow-hidden bg-cover bg-no-repeat bg-top h-[480px] sm:h-[480px]" style={{ backgroundImage: `url(${bgHeroUrl})` }}>
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.60)]">
                        <Navbar
                            links={navbar.links}
                            logoUrl={navbarLogoUrl}
                            logoText="mylogo"
                        />
                        <div className="flex mt-10 items-center justify-center container mx-auto">
                            <div className="px-6 text-center sm:mx-auto sm:w-1/2 text-white md:px-12 mt-20 sm:mt-0 sm:pb-5">
                                <h1 className="mb-8 text-center text-3xl font-light tracking-tight md:text-6xl xl:text-7xl">
                                    {data.title}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      </>
    )
}