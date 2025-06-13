import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import { projectsData } from "../data/projectsData";
import { motion, AnimatePresence } from "framer-motion";

const Projects = ({ language }) => {
  const categories = [
    {
      id: "fullstack",
      title: language === "es" ? "Proyectos Full Stack" : "Full Stack Projects",
    },
    { id: "juegos", title: language === "es" ? "Juegos Web" : "Web Games" },
    {
      id: "backend",
      title: language === "es" ? "Backend / Servidores" : "Backend / Servers",
    },
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const filtered = projectsData.filter((p) => p.category === activeCategory);

  return (
    <motion.section
      id="projects"
      className="h-screen flex flex-col px-6 md:px-12 bg-background text-textLight snap-start"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* TÍTULO */}
      <motion.h2
        className="flex-shrink-0 text-3xl sm:text-4xl font-bold text-center mt-8 sm:mt-24 mb-4 sm:mb-8 text-[#C29B39]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {language === "es" ? "Mis Proyectos" : "My Projects"}
      </motion.h2>

      {/* BOTONES */}
      <motion.div
        className="flex-shrink-0 flex justify-center gap-2 sm:gap-4 mb-4 sm:mb-6 flex-wrap"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition 
            ${
              activeCategory === cat.id
                ? "bg-[#C29B39] text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </motion.div>

      {/* CONTENIDO CENTRAL OCUPA ESPACIO RESTANTE */}
      <div className="w-full flex justify-center flex-1 pb-4 sm:pb-8 mt-2 sm:mt-8">
        <div className="w-full max-w-2xl h-auto sm:h-[60vh] flex items-start">
          <AnimatePresence mode="wait">
            <Swiper
              key={activeCategory}
              modules={[Navigation]}
              navigation
              slidesPerView={1}
            >
              {filtered.map((project) => (
                <SwiperSlide
                  key={project.id}
                  className="flex items-center justify-center h-full"
                >
                  <motion.div
                    className="w-full max-w-xl bg-gray-800 rounded-xl p-6 shadow-2xl hover:shadow-gold/20 transition-shadow overflow-y-auto flex flex-col justify-center mx-auto h-full"
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Cabecera */}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-3 text-[#C29B39]">
                        {language === "es"
                          ? project.title_es
                          : project.title_en}
                      </h3>
                      <p className="text-gray-300">
                        {language === "es"
                          ? project.description_es
                          : project.description_en}
                      </p>
                    </div>

                    {/* Características */}
                    <div className="mb-6 w-full">
                      <div className="max-w-md mx-auto">
                        <ul className="list-disc pl-8 pr-2 space-y-2">
                          {(language === "es"
                            ? project.features_es || []
                            : project.features_en || []
                          ).map((feature) => (
                            <li key={feature} className="text-gray-300 text-sm">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tecnologías */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {project.tech?.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Botones */}
                    <div className="flex flex-wrap justify-center gap-3">
                      {project.links?.demo && (
                        <Link
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#C29B39] hover:bg-[#ae8a34] text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
                        >
                          <span>🌐</span>
                          {language === "es"
                            ? "Demo Frontend"
                            : "Frontend Demo"}
                        </Link>
                      )}

                      {project.links?.docs && (
                        <Link
                          href={project.links.docs}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
                        >
                          <span>📚</span>
                          API Docs
                        </Link>
                      )}

                      {project.links?.code_api && (
                        <Link
                          href={project.links.code_api}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
                        >
                          <span>🔑</span>
                          {language === "es" ? "Código API" : "API Code"}
                        </Link>
                      )}

                      {project.links?.code_frontend && (
                        <Link
                          href={project.links.code_frontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
                        >
                          <span>🖥️</span>
                          {language === "es"
                            ? "Código Frontend"
                            : "Frontend Code"}
                        </Link>
                      )}

                      {project.links?.code && (
                        <Link
                          href={project.links.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#C29B39] hover:bg-[#ae8a34] text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
                        >
                          <span>🖥️</span>
                          {language === "es" ? "Código" : "Code"}
                        </Link>
                      )}
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
