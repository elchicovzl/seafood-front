import Image from 'next/image';
import Carousel from './Carousel';
import FishTitle from './FishTitle';
import TitleParagraphTwoColumns from './TitleParagraphTwoColumns';
import Button from './Button';
import { getStrapiMedia } from '../utils/api-helpers';

interface Media {
    data: {
        id: string,
        attributes: {
            url: string
        }
    }
}
interface WelcomeProps {
    id: string;
    fishTitle: string;
    TitleParagraphTwoColumns: {
        id: string;
        title: string;
        welcomeParagraph: [ [Object], [Object] ];
    };
    welcomeButton : {
        id: string;
        url: string;
        text: string;
        newTab: boolean;
        type: string;
    };
    welcomePicture: Media;
    welcomeImages: {
        data: Array<Object>
    };
}

export default function WelcomeSection({
    data
}:{
    data: WelcomeProps
}) {

    const welcomePicture = getStrapiMedia(
        data.welcomePicture.data.attributes.url
    );

    return (
        <>
            <section className="relative bg-cover bg-no-repeat bg-[100%] bg-my_bg_section">
                <div className="container mx-auto w-3/5 ">
                    <div className='flex flex-col sm:flex-row'>
                        <div className="text-center sm:text-left">
                            <FishTitle title={data.fishTitle} />
                            <TitleParagraphTwoColumns title={data.TitleParagraphTwoColumns.title} paragraphs={data.TitleParagraphTwoColumns.welcomeParagraph} />
                            <Button />
                        </div>
                        <Image className="my-10  sm:my-0 sm:w-[405px] sm:h-[600px]" src={welcomePicture} width={405} height={600} alt="sushi2"/>
                    </div>
                </div>
                <Carousel images={data.welcomeImages.data} />
            </section>
        </>
    )
}