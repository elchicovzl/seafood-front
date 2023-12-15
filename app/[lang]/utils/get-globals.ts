
import { fetchAPI } from "./fetch-api";

export async function getGlobal(lang: string): Promise<any> {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  
    if (!token) throw new Error("The Strapi API Token environment variable is not set.");
  
    const path = `/global`;
    const options = { headers: { Authorization: `Bearer ${token}` } };
  
    const urlParamsObject = {
      populate: [
        //"metadata.shareImage",
        "favicon",
        //"notificationBanner.link",
        "navbar.links",
        "footer.backgroundFooter",
        "footer.paragraph",
        "navbar.navbarLogo.logoImg",
        "footer.footerLogo.logoImg",
        "footer.menuLinks",
        "footer.TitleLinksFooter",
        "footer.TitleLinksFooter.url",
        "footer.TitleParagraphFooter",
        "footer.TitleParagraphFooter.paragraph",
        //"footer.legalLinks",
        "footer.socialLinks",
        //"footer.categories",
      ],
      locale: lang,
    };
    return await fetchAPI(path, urlParamsObject, options);
  }