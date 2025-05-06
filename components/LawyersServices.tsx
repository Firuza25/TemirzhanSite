'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const services = [
  {
    image: '/lawer1.svg',
    title: 'Защита в уголовных делах',
    points: [
      'Защита прав на стадии следствия и суда',
      'Обжалование приговоров и решений суда',
      'Представительство в правоохранительных органах',
      'Консультации и разработка стратегии защиты',
    ],
  },
  {
    image: '/lawer2.svg',
    title: 'Административные дела',
    points: [
      'Представительство в суде по административным правонарушениям',
      'Оспаривание штрафов, постановлений и решений государственных органов',
      'Защита бизнеса от неправомерных действий контролирующих органов',
    ],
  },
  {
    image: '/lawer3.svg',
    title: 'Гражданские дела',
    points: ['Защита прав потребителей', 'Взыскание долгов и компенсаций'],
  },
  {
    image: '/lawer4.svg',
    title: 'Корпоративное право и бизнес',
    points: [
      'Юридическая поддержка компаний',
      'Представительство в арбитражных судах',
      'Защита интересов бизнеса в спорах с контрагентами и госорганами',
    ],
  },
  {
    image: '/lawer5.svg',
    title: 'Дополнительные услуги',
    points: [
      'Консультации по любым юридическим вопросам',
      'Подготовка документов (исковые заявления, жалобы, ходатайства и др.)',
      'Сопровождение сделок',
      'Помощь в составлении официальных обращений',
    ],
  },
]

function LawyersServices() {
  const topCards = services.slice(0, 3)
  const bottomCards = services.slice(3)

  return (
    <section id="services" className="relative w-full bg-black text-white py-24 px-10x xl:px-20 2xl:px-6 overflow-hidden">
    
      <img
        src="/back1.svg"
        alt=""
        className="absolute right-0 bottom-0 w-[600px] xl:w-[800px] 2xl:w-[1000px] z-0 pointer-events-none select-none 2xl:bottom-[-200px]"
      />

      <div className="relative z-10 mx-auto max-w-[1224px] xl:max-w-[1440px] 2xl:max-w-[1632px]">
        <h2 className="text-xl sm:text-2xl md:text-3xl text-yellow-400 font-bold mb-12">
          Услуги адвоката
        </h2>

        {/* Desktop grid */}
        <div className="hidden lg:block"> {/* раньше было xl:block */}
        <div className="grid gap-10 grid-cols-3 2xl:gap-16">
            {topCards.map(({ image, title, points }, idx) => (
              <div
                key={idx}
                className="rounded-lg overflow-hidden shadow-lg bg-black/80 transform scale-100 2xl:scale-[1.07] transition-transform duration-300"
              >
                <Image
                  src={image}
                  alt={title}
                  width={400}
                  height={300}
                  className="w-full h-auto aspect-[3/4] xl:aspect-[1.2/1.3] 2xl:aspect-[5/3] object-cover rounded-lg transition-all duration-500"
                />
                <div className="p-5">
                  <h3 className="text-center text-white text-xl font-normal font-['Lato'] leading-normal">{title}</h3>
                  <ul className="text-center text-white text-sm font-light font-['Lato'] leading-tight">
                    {points.map((text, i) => (
                      <li key={i}>- {text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Нижние 2 */}
          <div className="flex justify-center gap-20 mt-12">
            {bottomCards.map(({ image, title, points }, idx) => (
             <div
             key={idx}
             className="rounded-lg overflow-hidden shadow-lg bg-black/80 transform scale-100 2xl:scale-[1.07] transition-transform duration-300"
           >
             <Image
               src={image}
               alt={title}
               width={400}
               height={300}
               className="w-full h-auto aspect-[3/4] xl:aspect-[1.2/1.3] 2xl:aspect-[5/3] object-cover rounded-lg transition-all duration-500"
             />
             <div className="p-5">
               <h3 className="text-center text-white text-xl font-normal font-['Lato'] leading-normal">{title}</h3>
               <ul className="text-center text-white text-sm font-light font-['Lato'] leading-tight">
                 {points.map((text, i) => (
                   <li key={i}>- {text}</li>
                 ))}
               </ul>
             </div>
           </div>
            ))}
          </div>
        </div>

        {/* Mobile version */}
        <div className="block lg:hidden"> 
          {/* Верхние 3 */}
          <div className="overflow-x-auto flex gap-4 pb-4 -mx-4 px-4">
            {topCards.map(({ image, title, points }, idx) => (
              <div
                key={idx}
                className="min-w-[320px] max-w-[320px] h-[460px] flex-shrink-0 rounded-[16px] overflow-hidden shadow-lg bg-[#f6ebdb] flex flex-col"
              >
                <div className="w-full h-[200px]">
                  <Image
                    src={image}
                    alt={title}
                    width={320}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-black p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">{title}</h3>
                    <ul className="text-sm leading-relaxed space-y-1">
                      {points.slice(0, 4).map((text, i) => (
                        <li key={i}>- {text}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Нижние 2 */}
          <div className="overflow-x-auto flex gap-4 mt-8 pb-4 -mx-4 px-4">
            {bottomCards.map(({ image, title, points }, idx) => (
              <div
              key={idx}
              className="min-w-[310px] max-w-[310px] h-[450px] flex-shrink-0 rounded-[16px] overflow-hidden shadow-lg bg-[#f6ebdb] flex flex-col"
            >
              <div className="w-full h-[190px]">
                <Image
                  src={image}
                  alt={title}
                  width={310}
                  height={190}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-black p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-3">{title}</h3>
                  <ul className="text-sm leading-relaxed space-y-1">
                    {points.slice(0, 4).map((text, i) => (
                      <li key={i}>- {text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="justify-start text-white text-2xl sm:text-3xl md:text-4xl font-light font-['Lato'] mb-3">
            Ваше право, наша миссия.
          </p>

          <Link
            href="https://wa.me/77785555028"
            className="inline-block px-6 py-3 bg-yellow-400 text-black text-base sm:text-lg font-bold font-['Lato'] rounded-full shadow-md hover:brightness-110 transition"
          >
            СВЯЗАТЬСЯ С НАМИ
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LawyersServices
