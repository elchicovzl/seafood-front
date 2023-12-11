import type { Metadata } from "next";
import "./globals.css";
import { getStrapiMedia, getStrapiURL } from "./utils/api-helpers";
import { fetchAPI } from "./utils/fetch-api";

import { i18n } from "../../i18n-config";
//import Banner from "./components/Banner";
//import Footer from "./components/Footer";
//import Navbar from "./components/Navbar";
//import {FALLBACK_SEO} from "@/app/[lang]/utils/constants";

import { FaInstagram, FaFacebook  } from "react-icons/fa";
import Image from 'next/image';


async function getGlobal(lang: string): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token) throw new Error("The Strapi API Token environment variable is not set.");

  const path = `/global`;
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const urlParamsObject = {
    populate: [
      "metadata.shareImage",
      "favicon",
      "notificationBanner.link",
      "navbar.links",
      "navbar.navbarLogo.logoImg",
      "footer.footerLogo.logoImg",
      "footer.menuLinks",
      "footer.legalLinks",
      "footer.socialLinks",
      "footer.categories",
    ],
    locale: lang,
  };
  return await fetchAPI(path, urlParamsObject, options);
}

/* export async function generateMetadata({ params } : { params: {lang: string}}): Promise<Metadata> {
  const meta = await getGlobal(params.lang);

  //if (!meta.data) return FALLBACK_SEO;

  const { metadata, favicon } = meta.data.attributes;
  const { url } = favicon.data.attributes;

  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    icons: {
      icon: [new URL(url, getStrapiURL())],
    },
  };
} */

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  /* const global = await getGlobal(params.lang);
  // TODO: CREATE A CUSTOM ERROR PAGE
  if (!global.data) return null; */
  
  //const { notificationBanner, navbar, footer } = global.data.attributes;

  /* const navbarLogoUrl = getStrapiMedia(
    navbar.navbarLogo.logoImg.data.attributes.url
  );

  const footerLogoUrl = getStrapiMedia(
    footer.footerLogo.logoImg.data.attributes.url
  ); */

  return (
    <html lang={params.lang}>
      <body>
        <main className="">
        {children}
        
        <section className="bg-cover bg-no-repeat w-[100%] h-full sm:h-[400px] bg-my_bg_image mt-20 relative ">
        <div className="sm:absolute top-0 right-0 bottom-0 left-0 h-full w-full sm:overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.50)] backdrop-blur-sm">
          <div className="container mx-auto w-3/5 sm:absolute sm:top-[20%] sm:left-[20%]">
            <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-10 items-center">
              <div className="flex flex-col text-white text-center py-10">
                <h3 className="text-lg text-white mb-4">MAIL US</h3>
                <p className="text-sm">info@seafood.com</p>
                <p className="text-sm mt-1">reservation@seafood.com</p>
              </div>
              <div className="flex flex-col text-white text-center items-center">
                <Image className="sm:pt-10 z-20" src="/images/logo.png" width="200" height="52" alt="logofooter" />
                <p className="w-2/3 py-5 text-sm">
                  Lorem ipsum dolor sit amet, consectetur ad
                  ipiscing Integer pulvinar
                </p>
                <div className="flex flex-row gap-3">
                  <FaInstagram />
                  <FaFacebook />
                </div>
              </div>
              <div className="flex flex-col text-white text-center py-10  items-center">
                <h3 className="text-lg text-white mb-4">RESTAURANT</h3>
                <p className="w-[70%] text-sm">
                  Main Street San Francisco
                +1 274 457 375
                </p>
              </div>
            </div>
          </div>
        </div>
        </section>
        </main>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
