import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-8 snap-start overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.h1
        className="text-5xl font-bold mb-20"
        style={{ color: "#C29B39" }}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        ¡Hola! Soy Jorge
      </motion.h1>

      <motion.p
        className="text-lg max-w-2xl text-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        Desarrollador web apasionado por crear experiencias digitales únicas e
        innovadoras.
      </motion.p>

      <motion.p
        className="text-md max-w-2xl text-center mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9, delay: 1.0 }}
      >
        He estudiado el bootcamp full stack de desarrollo web de Ironhack, donde
        he adquirido experiencia en tecnologías como{" "}
        <span className="font-semibold text-highlight">
          JavaScript, React, Node.js, Express
        </span>
        y <span className="font-semibold text-highlight">MongoDB</span>. Durante
        esta formación, he aprendido a desarrollar aplicaciones web completas,
        abarcando tanto el frontend como el backend.
      </motion.p>

      <motion.p
        className="text-md max-w-2xl text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9, delay: 1.7 }}
      >
        Sin embargo, mi verdadera pasión se encuentra en el{" "}
        <span className="font-semibold text-highlight">desarrollo backend</span>
        . Me encanta trabajar en la gestión de servidores, bases de datos y la
        creación de APIs eficientes y escalables. Actualmente, estoy dedicando
        la mayor parte de mi tiempo a perfeccionar mis habilidades en
        arquitectura backend, optimización del rendimiento y seguridad de
        aplicaciones web, explorando tecnologías como{" "}
        <span className="font-semibold text-highlight">Node.js, Express</span> y
        bases de datos como{" "}
        <span className="font-semibold text-highlight">MongoDB y SQL</span>.
      </motion.p>
    </motion.section>
  );
};

export default About;
