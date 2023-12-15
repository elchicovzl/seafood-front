import React from 'react'
import { FaInstagram, FaFacebook  } from "react-icons/fa"
import Image from 'next/image'


interface Paragraph {
    id: number,
    textParagraph: string
}
interface URL {
    id: number,
    url: string
}
interface TitleParagraphFooter {
    id: number;
    title: string;
    paragraph: Array<Paragraph>;
}
interface TitleLinksFooter {
    id: number;
    title: string;
    url: Array<URL>;
}

function RenderSocialIcon({ social }: { social: string | undefined }) {
    switch (social) {
        case "INSTAGRAM":
        return <FaInstagram />;
        case "FACEBOOK":
        return <FaFacebook />;
        default:
        return null;
    }
}

export default function Footer({
    logoUrl,
    bgUrl,
    TitleParagraphFooter,
    TitleLinksFooter,
    paragraph
}: {
    logoUrl: string | null;
    bgUrl: string | null;
    TitleParagraphFooter : TitleParagraphFooter;
    TitleLinksFooter : TitleLinksFooter;
    paragraph : string
}) {

    return (
        <footer className="bg-cover bg-no-repeat w-[100%] h-full sm:h-[400px] mt-20 relative" style={{ backgroundImage: `url(${bgUrl})` }}>
            <div className="sm:absolute top-0 right-0 bottom-0 left-0 h-full w-full sm:overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.50)] backdrop-blur-sm">
                <div className="container mx-auto w-3/5 sm:absolute sm:top-[20%] sm:left-[20%]">
                    <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-10 items-center">
                        <div className="flex flex-col text-white text-center py-10">
                            <h3 className="text-lg text-white mb-4">{TitleLinksFooter.title}</h3>
                            {TitleLinksFooter.url.map((url: URL) => {
                                    return <p className="text-sm">{url.url}</p>
                                }
                            )}
                        </div>
                        <div className="flex flex-col text-white text-center items-center">
                            <Image className="sm:pt-10 z-20" src={logoUrl} width="200" height="52" alt="logofooter" />
                            <p className="w-2/3 py-5 text-sm">
                                {paragraph}
                            </p>
                            <div className="flex flex-row gap-3">
                                <FaInstagram />
                                <FaFacebook />
                            </div>
                        </div>
                        <div className="flex flex-col text-white text-center py-10  items-center">
                            <h3 className="text-lg text-white mb-4">{TitleParagraphFooter.title}</h3>
                            {TitleParagraphFooter.paragraph.map((paragraph: Paragraph) => {
                                    return <p className="w-full text-sm">{paragraph.textParagraph}</p>
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
