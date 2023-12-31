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
import Footer from "./components/Footer";
import { getGlobal } from "./utils/get-globals";



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
  const global = await getGlobal(params.lang);

  // TODO: CREATE A CUSTOM ERROR PAGE
  if (!global.data) return null;
  
  const { navbar, footer } = global.data.attributes;

  console.log("global data")
  console.log(footer.TitleLinksFooter)

  /* const navbarLogoUrl = getStrapiMedia(
    navbar.navbarLogo.logoImg.data.attributes.url
  );
*/

  const footerLogoUrl = getStrapiMedia(
    footer.footerLogo.logoImg.data.attributes.url
  );

  const footerBgUrl = getStrapiMedia(
    footer.backgroundFooter.data.attributes.url
  );

  return (
    <html lang={params.lang}>
      <body>
        <main className="">
          {children}
          <Footer
            logoUrl={footerLogoUrl}
            bgUrl={footerBgUrl}
            TitleParagraphFooter={footer.TitleParagraphFooter}
            paragraph={footer.paragraph}
            TitleLinksFooter={footer.TitleLinksFooter}
          />
        </main>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
