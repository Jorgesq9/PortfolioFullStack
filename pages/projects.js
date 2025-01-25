import { motion } from "framer-motion";
import Link from "next/link";

const Projects = () => {
  const projectCategories = [
    {
      id: "websites",
      title: "Páginas Web",
      description: "Desarrollo de sitios web responsivos.",
      link: "/projects/websites",
    },

    {
      id: "apis",
      title: "APIs",
      description: "Desarrollo de APIs REST y GraphQL.",
      link: "/projects/apis",
    },
    {
      id: "games",
      title: "Juegos",
      description: "Proyectos de desarrollo de videojuegos.",
      link: "/projects/games",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-8 bg-background text-textLight"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.h2
        className="text-4xl font-bold mb-6"
        style={{ color: "#C29B39" }}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Mis Proyectos
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectCategories.map((category) => (
          <motion.div
            key={category.id}
            className="bg-gray-700 p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Link href={category.link}>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-300">{category.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
