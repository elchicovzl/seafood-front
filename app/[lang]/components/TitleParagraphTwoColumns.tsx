import React from 'react'

export default function TitleParagraphTwoColumns({
    title,
    paragraphs
}:{
    title: string;
    paragraphs: Array<Object>;
}) {
    return (
        <>
            <h2 className="text-black text-3xl text-center sm:text-left mx-auto">{title}</h2>
            <div className="flex flex-col sm:flex-row container w-11/12 mb-5 sm:mb-10">
            {
                paragraphs.map( (text:any, index) => {
                    return <p className="text-[#4C4C4C] mt-5 text-[15px] text-center sm:text-left">
                       {text.textParagraph}
                    </p>
                })
            }
            </div>
        </>
    )
}