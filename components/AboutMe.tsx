import Image from 'next/image'

export default function AboutMe() {
  return (
    <section id="aboutMe" className="relative w-full bg-black text-white py-24 px-4 xl:px-16 2xl:px-24 overflow-hidden">
      <div className="mx-auto max-w-[1224px] xl:max-w-[1440px] 2xl:max-w-[1632px] flex flex-col lg:flex-row items-center gap-12 xl:gap-20">

        {/* Фоновое изображение (НЕ предзагружается) */}
        <img
          src="/back2.svg"
          alt=""
          className="absolute right-0 bottom-0 w-[600px] xl:w-[500px] 2xl:w-[600px] z-0 pointer-events-none select-none"
        />

        {/* Основное фото — предзагружается */}
        <div className="relative w-full max-w-[420px] sm:max-w-[500px] lg:max-w-none h-[600px] sm:h-[700px] lg:h-[1000px] transition-all duration-300">
          <Image
            src="/mainPhoto2.svg"
            alt="Байгоков Темиржан Муратович"
            fill
            priority // ✅ preload включён только здесь
            className="object-cover object-center rounded-lg"
          />
        </div>

        {/* Текстовый блок */}
        <div className="w-full max-w-2xl text-left">
          <h3 className="text-white text-4xl font-bold font-['Cormorant_Garamond'] mb-8">
            Обо мне
          </h3>
          <h2 className="text-yellow-400 text-5xl sm:text-6xl font-bold font-['Cormorant_Garamond'] mb-8">
            Байгоков Темиржан Муратович
          </h2>
          <p className="text-white text-xl sm:text-2xl font-light font-['Lato'] mb-8 leading-relaxed">
            Имея обширный опыт в юридической практике, я оказываю поддержку по различным правовым вопросам —
            начиная от консультаций и подготовки документов до представления интересов в суде. Работаю с уголовными,
            гражданскими и административными делами, помогая своим клиентам найти наилучшее решение в сложных ситуациях.
          </p>
          <p className="text-zinc-500 text-base font-medium font-['Manrope']">
            Моя цель — обеспечить защиту ваших прав, свобод и законных интересов на каждом этапе разбирательства.
          </p>
        </div>
      </div>
    </section>
  )
}
