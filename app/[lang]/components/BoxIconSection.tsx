import React from 'react'
import BoxIconTitleP from './BoxIconTitleP'

export default function BoxIconSection() {
  return (
    <section className="relative bg-cover bg-no-repeat bg-[100%] bg-my_bg_section py-5 sm:py-20">
        <div className="container mx-auto w-3/5">
        <div className="flex flex-col sm:gap-36 sm:flex-row">
            <BoxIconTitleP />
            <BoxIconTitleP />
        </div>
        <div className="flex flex-col sm:gap-36 sm:flex-row mt-10">
            <BoxIconTitleP />
            <BoxIconTitleP />
        </div>
        </div>
    </section>
  )
}
