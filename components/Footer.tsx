export default function Footer() {
    return (
      <footer className="bg-black text-white px-6 sm:px-12 xl:px-20 py-10  flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800">
        
        <p className="text-white/60 text-2xl xl:text-3xl font-normal font-['Lato'] leading-loose text-center md:text-left mt-10">
          © 2025 Temirzhan Baitokov
        </p>
  
        <a
  href="https://wa.me/77785555028?text=Здравствуйте,%20хочу%20записаться%20на%20консультацию"
  target="_blank"
  rel="noopener noreferrer"
>
        <button
          className="px-6 py-3 rounded-3xl outline outline-1 outline-offset-[-1px] outline-white/20 
                     inline-flex justify-center items-center
                     text-white text-xl font-medium font-['Lato']
                     hover:bg-white hover:text-black hover:scale-[1.03] transition-all duration-300 mt-10"
        >
          Записаться на консультацию
        </button>
        </a>
      </footer>
    );
  }
  