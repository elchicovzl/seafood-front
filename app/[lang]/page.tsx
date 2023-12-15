import LangRedirect from './components/LangRedirect';
import {sectionRenderer} from './utils/section-renderer';
import {getPageBySlug} from "./utils/get-page-by-slug";
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import WelcomeSection from './components/WelcomeSection';
import MansorySection from './components/MansorySection';
import Button from './components/Button';
import BoxIconSection from './components/BoxIconSection';
import BgBannerRightBoxSection from './components/BgBannerRightBoxSection';
import TextLeftRigthImageStatisticsSection from './components/TextLeftRigthImageStatisticsSection';
import BannerStatisticsSection from './components/BannerStatisticsSection';
import OurProductsSection from './components/OurProductsSection';
import { getGlobal } from './utils/get-globals';

export default async function RootRoute({params}: { params: { lang: string } }) {
    try {
      const global = await getGlobal(params.lang);
      const page = await getPageBySlug('home', params.lang)

      const { navbar } = global.data.attributes;
      
      if (page.error && page.error.status == 401)
        throw new Error(
          'Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/'
        )

      if (page.data.length == 0 && params.lang !== 'en') return <LangRedirect />
      if (page.data.length === 0) return null

      console.log("page data")
      console.log(page.data[0].attributes)

      const contentSections = page.data[0].attributes.contentSections
      return contentSections.map((section: any, index: number) =>
        sectionRenderer(section, index, navbar)
      )

    } catch (error: any) {
      window.alert('Missing or invalid credentials')
    }
}
