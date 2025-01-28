import { motion } from "framer-motion";

const About = ({ language }) => {
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
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center leading-tight"
        style={{ color: "#C29B39" }}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {language === "es" ? "¡Hola! Soy Jorge" : "Hello! I'm Jorge"}
      </motion.h1>

      <motion.p
        className="text-lg max-w-2xl text-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {language === "es"
          ? "Desarrollador web apasionado por crear experiencias digitales únicas e innovadoras."
          : "Web developer passionate about creating unique and innovative digital experiences."}
      </motion.p>

      <motion.p
        className="text-md max-w-2xl text-center mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9, delay: 1.0 }}
      >
        {language === "es" ? (
          <>
            He estudiado el bootcamp full stack de desarrollo web de Ironhack,
            donde he adquirido experiencia en tecnologías como
            <span className="font-semibold text-highlight">
              {" "}
              JavaScript, React, Node.js, Express
            </span>{" "}
            y<span className="font-semibold text-highlight"> MongoDB</span>.
            Durante esta formación, he aprendido a desarrollar aplicaciones web
            completas, abarcando tanto el frontend como el backend.
          </>
        ) : (
          <>
            I studied the full stack web development bootcamp at Ironhack, where
            I gained experience in technologies such as
            <span className="font-semibold text-highlight">
              {" "}
              JavaScript, React, Node.js, Express,
            </span>{" "}
            and
            <span className="font-semibold text-highlight"> MongoDB</span>.
            During this training, I learned how to develop complete web
            applications, covering both the frontend and backend.
          </>
        )}
      </motion.p>
    </motion.section>
  );
};

export default About;
