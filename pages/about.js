import { motion } from "framer-motion";

const About = ({ language }) => {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-8 snap-start overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center leading-tight"
        style={{ color: "#C29B39" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
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
          ? "Desarrollador web full stack con un fuerte enfoque en backend y despliegue."
          : "I'm a full-stack web developer with a strong focus on backend and deployment."}
      </motion.p>

      <motion.p
        className="text-md max-w-2xl text-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9, delay: 1.0 }}
      >
        {language === "es" ? (
          <>
            Me formé en el bootcamp full stack de desarrollo web de Ironhack,
            donde trabajé con tecnologías como
            <span className="font-semibold text-highlight">
              {" "}
              JavaScript, React, Node.js, Express
            </span>
            y <span className="font-semibold text-highlight">MongoDB</span>.
            Además, gestiono mi propio servidor y despliego en
            <span className="font-semibold text-highlight"> AWS EC2</span>,
            utilizando{" "}
            <span className="font-semibold text-highlight">
              Docker, Nginx, Cloudflare y
            </span>
            <span className="font-semibold text-highlight"> systemd</span>, lo
            que me ha permitido llevar proyectos reales a producción.
            <br />
            <br />
            Actualmente curso el ciclo superior de{" "}
            <span className="font-semibold text-highlight">
              Administración de Sistemas Informáticos en Red (ASIR)
            </span>{" "}
            para reforzar mis conocimientos en administración de sistemas,
            redes, virtualización y cloud computing.
          </>
        ) : (
          <>
            I trained at Ironhack's full stack web development bootcamp, where I
            worked with technologies such as
            <span className="font-semibold text-highlight">
              {" "}
              JavaScript, React, Node.js, Express
            </span>
            and <span className="font-semibold text-highlight">MongoDB</span>. I
            also manage my own server and deploy projects on
            <span className="font-semibold text-highlight"> AWS EC2</span>,
            using{" "}
            <span className="font-semibold text-highlight">
              Docker, Nginx, Cloudflare and
            </span>
            <span className="font-semibold text-highlight"> systemd</span>,
            which has allowed me to bring real projects into production.
            <br />
            <br />I am currently studying{" "}
            <span className="font-semibold text-highlight">
              Advanced Training in Networked Computer Systems Administration
            </span>{" "}
            to strengthen my skills in system administration, networking,
            virtualization and cloud computing.
          </>
        )}
      </motion.p>
    </motion.section>
  );
};

export default About;
