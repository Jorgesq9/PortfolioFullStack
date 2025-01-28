import { useState } from "react";

const DesktopNavBar = ({ toggleLanguage, isEnglish }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-navbar text-white h-20 px-8 flex justify-between items-center z-50 shadow-lg">
      <div className="flex items-center">
        <img src="/Logo.png" alt="Logo JE" className="h-32 w-auto rounded-lg" />
      </div>

      <div className="absolute left-[48%] transform -translate-x-1/2 flex space-x-14">
        <a
          href="https://www.linkedin.com/in/jorge-esquiva-llobregat-614565131/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--link-hover)] transition-all"
        >
          <img src="/linkedin.png" alt="LinkedIn" className="w-10 h-10" />
        </a>

        <a
          href="https://github.com/Jorgesq9"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--link-hover)] transition-all"
        >
          <img src="/github.png" alt="GitHub" className="w-10 h-10" />
        </a>

        <a
          href="/cv.pdf"
          download="CV_Jorge_Esquiva.pdf"
          className="hover:text-[var(--link-hover)] transition-all"
        >
          <img src="/cv-icon.png" alt="Descargar CV" className="w-10 h-10" />
        </a>
      </div>

      <div className="flex space-x-8 text-lg">
        <a
          href="#projects"
          className="hover:text-[var(--link-hover)] transition-all"
        >
          Proyectos
        </a>
        <a
          href="#contact"
          className="hover:text-[var(--link-hover)] transition-all"
        >
          Contacto
        </a>
        <button onClick={toggleLanguage} className="transition-all">
          <img
            src={isEnglish ? "/spain-flag.png" : "/uk-flag.png"}
            alt={isEnglish ? "Español" : "English"}
            className="w-8 h-6 rounded-lg flag-btn"
          />
        </button>
      </div>
    </nav>
  );
};

export default DesktopNavBar;
