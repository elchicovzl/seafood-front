import Image from 'next/image';
import Carousel from './Carousel';
import FishTitle from './FishTitle';
import TitleParagraphTwoColumns from './TitleParagraphTwoColumns';
import Button from './Button';

export default function WelcomeSection() {
    return (
        <>
            <section className="relative  bg-cover bg-no-repeat bg-[100%]  bg-my_bg_section">
                <div className="container mx-auto w-3/5 ">
                    <div className='flex flex-col sm:flex-row'>
                        <div className="text-center sm:text-left">
                        <FishTitle />
                        <TitleParagraphTwoColumns />
                        <Button />
                        </div>
                        <Image className="my-10  sm:my-0 sm:w-[405px] sm:h-[600px]" src="/images/sushi2.jpg" width={405} height={600} alt="sushi2"/>
                    </div>
                </div>
                <Carousel />
            </section>
        </>
        )
    }