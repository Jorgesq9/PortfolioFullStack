import { motion } from "framer-motion";
import Link from "next/link";
import { projectsData } from "../data/projectsData";

const Projects = ({ language }) => {
  return (
    <motion.section
      id="projects"
      className="min-h-screen py-20 px-6 md:px-12 bg-background text-textLight"
    >
      <h2 className="text-4xl font-bold text-center mb-16 text-[#C29B39]">
        {language === "es" ? "Mis Proyectos" : "My Projects"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 rounded-xl p-6 shadow-2xl hover:shadow-gold/20 transition-shadow"
            whileHover={{ y: -5 }}
          >
            {/* Título y Descripción */}
            <h3 className="text-2xl font-bold mb-3 text-[#C29B39]">
              {language === "es" ? project.title_es : project.title_en}
            </h3>
            <p className="text-gray-300 mb-4">
              {language === "es"
                ? project.description_es
                : project.description_en}
            </p>

            {/* Características Principales */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2 text-gray-400">
                {language === "es" ? "Características Clave" : "Key Features"}
              </h4>
              <ul className="list-disc pl-5 space-y-2">
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

            {/* Tecnologías */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Botones y Enlaces */}
            <div className="flex flex-wrap gap-3">
              {project.links.demo && (
                <Link
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#C29B39] hover:bg-[#ae8a34] text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
                >
                  <span>🌐</span>
                  {language === "es" ? "Demo Frontend" : "Frontend Demo"}
                </Link>
              )}

              {project.links.docs && (
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

              {project.links.code_api && (
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

              {project.links.code_frontend && (
                <Link
                  href={project.links.code_frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
                >
                  <span>🖥️</span>
                  {language === "es" ? "Código Frontend" : "Frontend Code"}
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
