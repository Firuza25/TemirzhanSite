'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
    return (
        <section className="relative w-full bg-black text-white overflow-hidden py-12 min-h-[800px]">
            <div className="w-full px-4 mt-50 sm:px-6 lg:px-8 xl:px-10 2xl:px-6 mx-auto max-w-[1224px] xl:max-w-[1440px] 2xl:max-w-[1632px] flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

                <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-6 mx-auto max-w-[1224px] xl:max-w-[1440px] 2xl:max-w-[1632px]">
                    <div className="max-w-2xl ml-8 2x:mb-10">
                        <p className="text-base font-light font-['Lato'] mb-2 text-gray-400 text-center lg:text-left">
                            Опыт. Надёжность. Результат.
                        </p>
                        <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold font-['Cormorant_Garamond'] leading-tight text-center lg:text-left">
    Юридическая помощь <br /> на высшем уровне
</h1>
<p className="text-base font-light font-['Lato'] mt-4 text-center lg:text-left xl:text-sm 2xl:text-base lg:text-sm">
    Адвокат по уголовным, административным и гражданским делам в Казахстане
</p>
<p className="text-white text-base font-light font-['Lato'] mt-6 mb-5 text-center lg:text-left xl:text-sm 2xl:text-base">
    Ваше право, наша миссия.
</p>

                        <div className="flex justify-center lg:justify-start">
      
                                <Link
                                    href="https://wa.me/77785555028"
                                    className="px-5 py-3 bg-yellow-400 rounded-[48px] shadow-[0px_0px_10px_0px_rgba(255,255,255,0.25)] inline-flex items-center gap-1.5"
                                >

                                    <span className="text-black text-lg font-bold font-['Lato'] text-center">
                                        ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ
                                    </span>
                                    
                                </Link>
                        </div>
                    </div>

                    
                    <div className="flex justify-center mt-10 lg:hidden">
                        <Image
                            src="/Temirzhan.svg"
                            alt="Фото адвоката"
                            width={604}
                            height={800}
                            className="object-contain w-full max-w-[604px] h-auto"
                        />
                    </div>
                </div>

    
                <div
                    className="
            hidden lg:flex absolute top-0 right-0 items-start justify-end
            w-[604px] h-[800px]
            2xl:w-[805.21px] 2xl:h-[1066.93px]
            transform transition-transform duration-500 ease-in-out
            scale-100 2xl:scale-[1.12]
          "
                >
                    <Image
                        src="/Temirzhan.svg"
                        alt="Фото адвоката"
                        width={805}
                        height={1066}
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}
