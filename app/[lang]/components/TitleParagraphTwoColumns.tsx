import React from 'react'

export default function TitleParagraphTwoColumns() {
    return (
        <>
            <h2 className="text-black text-3xl text-center sm:text-left mx-auto">Welcome to our Restaurant</h2>
            <div className="flex flex-col sm:flex-row container w-11/12">
                <p className="text-[#4C4C4C] mt-5 text-[15px] text-center sm:text-left">
                    Quisque eu euismod arcu. Morbi et dapibus diam, sed
                    interdum velit. Proin tempor nunc vel nisl
                    condimentum, nec tempor risus lacinia.
                </p>
                <p className="text-[#4C4C4C] mt-5 sm:ml-5 mb-10 sm:mb-10 text-[15px] text-center sm:text-left">
                    Curabitur a fringilla eros. Pellentesque eu interdum
                    nulla. Pellentesque porttitor dui nec leo condimentum,
                    et euismod mi mollis.
                </p>
            </div>
        </>
    )
}