'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="absolute top-0 left-0 w-full z-20 bg-transparent text-white py-10">
      {!isMobile && (
        <div className="w-full px-4 sm:px-10 lg:px-15 xl:px-25 2xl:px-25 mx-auto max-w-[1224px] xl:max-w-[1440px] 2xl:max-w-[1632px] flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link href="/" aria-label="Логотип" className="relative w-[76px] h-[64px]">
              <Image
                src="/logo.svg"
                alt="Логотип адвоката Иванова"
                fill
                priority 
                className="object-contain"
              />
            </Link>
            <nav className="flex gap-10 items-end font-['Cormorant_Garamond']">
              <Link href="#services" className="text-2xl">Услуги</Link> {/* Крючок на секцию "Услуги" */}
              <Link href="#aboutMe" className="text-2xl font-light font-['Lato']">Об адвокате</Link>
              <Link href="#contacts" className="text-2xl font-light font-['Lato']">Контакты</Link>

            </nav>
          </div>
          <Link href="https://wa.me/77785555028" target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-yellow-400 rounded-[58px] shadow-[0px_0px_10px_0px_rgba(255,255,255,0.25)] inline-flex justify-start items-center gap-1.5 text-black text-lg font-bold font-['Lato']">
  СВЯЗАТЬСЯ С НАМИ
</Link>

   
        </div>
      )}

      {isMobile && (
        <div className="flex justify-center mt-15">  
          <Link href="/" aria-label="Логотип" className="relative w-[100px] h-[80px]">  
            <Image
              src="/logo.svg"
              alt="Логотип адвоката Темиржан"
              fill
              priority
              className="object-contain"
            />
          </Link>
        </div>
      )}
    </header>
  )
}
