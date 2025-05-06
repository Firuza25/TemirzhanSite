import React from 'react';

export default function LowPart() {
    return (
        <section
        id="contacts"
            className="relative w-full bg-cover bg-no-repeat bg-center px-6 xl:px-28 py-16 overflow-hidden"
            style={{ backgroundImage: "url('/low.svg')" }}
        >
            <div className="absolute inset-0 bg-[#3A3A3A] opacity-80 z-0 pointer-events-none" />

            <div className="relative z-10 max-w-[1704px] mx-auto flex flex-col xl:flex-row justify-between items-center xl:items-center gap-12">

                <div className="flex flex-col items-start text-left xl:items-start xl:text-left justify-center gap-6 max-w-xl">
<h2 className="low-title text-white font-bold font-['Cormorant_Garamond'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
  Доверяйте своё будущее профессионалу
</h2>



                    <div className="w-20 h-[5px] bg-white rounded" />

                    <p className="text-white text-base sm:text-lg md:text-xl font-light font-['Lato'] leading-snug">
                        Запишитесь на консультацию с адвокатом и получите <br className="hidden sm:block" />
                        экспертную помощь в решении ваших вопросов.
                    </p>

                    <a
                        href="https://wa.me/77785555028?text=Здравствуйте,%20хочу%20записаться%20на%20консультацию"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="px-6 py-3 bg-yellow-400 text-black text-base sm:text-lg font-bold font-['Lato'] rounded-full shadow-md hover:brightness-110 transition w-fit">
                            ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ
                        </button>
                    </a>

                </div>

                {/* Правая часть — контакты */}
                <div className="contacts flex flex-col justify-center gap-5 max-w-md text-white mt-50 ">
                    <div className="flex items-center gap-2">
                        <img src="/phone.svg" className="w-6 h-6" alt="phone" />
                        <span className="text-sm sm:text-base font-light font-['Lato']">+7 778 555 50 28</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/location.svg" className="w-6 h-6" alt="location" />
                        <span className="text-sm sm:text-base font-light font-['Lato']">
                            Казахстан, г.Алматы, пр.Назарбаева 88, офис 17
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/email.svg" className="w-6 h-6" alt="email" />
                        <span className="text-sm sm:text-base font-light font-['Lato']">
                            advokat_baitokov@mail.ru
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
