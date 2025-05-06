'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { question: 'Как записаться на консультацию?', answer: `Нажмите на кнопку "Записаться на консультацию" на главной странице или в разделе "Контакты".` },
  { question: 'Какие услуги вы предоставляете?', answer: `Я предоставляю юридические консультации, представительство в суде, сопровождение сделок и другие юридические услуги. Подробности можно узнать в разделе "Услуги".` },
  { question: 'Сколько стоит консультация?', answer: `Стоимость консультации зависит от сложности вашего дела. Нажмите на кнопку "Записаться на консультацию".` },
  { question: 'Как быстро я получу ответ на заявку?', answer: `Я стараюсь отвечать лично на заявки в течение 24 часов.` },
  { question: 'Гарантируете ли вы конфиденциальность?', answer: `Да, я строго соблюдаю конфиденциальность всех клиентов и их дел` },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-black text-white px-6 xl:px-28 py-24">
      <div className="max-w-[1704px] mx-auto grid grid-cols-1 xl:grid-cols-3 gap-12">
        
        <div className="xl:col-span-1 flex items-start">
          <h2 className="text-6xl font-bold font-['Cormorant_Garamond'] leading-tight whitespace-nowrap">
            Часто задаваемые<br />вопросы
          </h2>
        </div>

        <div className="xl:col-span-2 w-full xl:max-w-[660px] 2xl:max-w-[800px] space-y-6 xl:ml-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-700 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                className="w-full flex justify-between items-center text-left text-xl font-light text-white hover:text-yellow-400 transition-colors duration-300"
              >
                <span>{faq.question}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-6 h-6 text-white transition-transform duration-300" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-white transition-transform duration-300" />
                )}
              </button>
              {openIndex === i && (
                <p className="mt-4 text-gray-400 text-base leading-relaxed transition-all duration-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
