import React from 'react';
import Image from 'next/image';

export default function BoxIconTitleP() {
    return (
        <div className="shadow-lg p-8">
            <div className="relative">
                <Image className="sm:absolute sm:-left-16" src="/images/icon1.png" width={80} height={80} alt="icon1" />
                <div className="flex flex-col sm:pl-10">
                    <h3 className="text-[23px]">Onigiri 8 pieces</h3>
                    <p className="text-[15px] text-[#4C4C4C]">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec
                    </p>
                </div>
            </div>
        </div>
    )
}