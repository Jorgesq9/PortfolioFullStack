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
      {/* TITLE */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center leading-tight"
        style={{ color: "#C29B39" }}
      >
        {language === "es" ? "Hola! Soy Jorge" : "Hello! I'm Jorge"}
      </motion.h1>

      {/* SUBTITLE */}
      <motion.p
        className="text-lg max-w-2xl text-center mb-10 font-semibold"
        style={{ color: "#C29B39" }}
      >
        {language === "es"
          ? "Técnico de Sistemas especializado en infraestructura Linux, automatización y entornos cloud."
          : "Systems Engineer specialized in Linux infrastructure, automation and cloud environments."}
      </motion.p>

      {/* DESKTOP VERSION */}
      <motion.div className="hidden md:block text-md max-w-2xl text-center space-y-4">
        {language === "es" ? (
          <>
            <p>
              Actualmente trabajo como{" "}
              <span className="font-semibold text-highlight">
                Técnico de Sistemas en Santander Digital Services
              </span>
              , operando infraestructura híbrida crítica 24/7 con{" "}
              <span className="font-semibold text-highlight">
                Linux, Mainframe IBM z/OS y Dynatrace
              </span>
              .
            </p>

            <p>
              Gestiono entornos de producción reales con{" "}
              <span className="font-semibold text-highlight">
                Docker, Nginx, Cloudflare y AWS EC2
              </span>
              , desplegando y manteniendo servicios en un servidor propio en
              producción.
            </p>

            <p>
              Me especializo en{" "}
              <span className="font-semibold text-highlight">
                automatización de infraestructura
              </span>
              , construyendo entornos reproducibles con pipelines de despliegue,
              monitorización y scripting en{" "}
              <span className="font-semibold text-highlight">
                Bash y Python
              </span>
              .
            </p>

            <p>
              Mantengo un homelab propio con staging y producción replicados,
              donde practico y despliego con{" "}
              <span className="font-semibold text-highlight">
                VMware, Ubuntu Server y Docker Compose
              </span>
              .
            </p>

            <p>
              Formado en desarrollo full-stack en{" "}
              <span className="font-semibold text-highlight">Ironhack</span> y
              actualmente preparando la certificación{" "}
              <span className="font-semibold text-highlight">
                AWS Solutions Architect Associate
              </span>
              .
            </p>
          </>
        ) : (
          <>
            <p>
              Currently working as{" "}
              <span className="font-semibold text-highlight">
                Systems Engineer at Santander Digital Services
              </span>
              , operating critical hybrid infrastructure 24/7 with{" "}
              <span className="font-semibold text-highlight">
                Linux, IBM z/OS Mainframe and Dynatrace
              </span>
              .
            </p>

            <p>
              I manage real production environments with{" "}
              <span className="font-semibold text-highlight">
                Docker, Nginx, Cloudflare and AWS EC2
              </span>
              , deploying and maintaining services on a self-hosted production
              server.
            </p>

            <p>
              I specialize in{" "}
              <span className="font-semibold text-highlight">
                infrastructure automation
              </span>
              , building reproducible environments with deployment pipelines,
              monitoring and scripting in{" "}
              <span className="font-semibold text-highlight">
                Bash and Python
              </span>
              .
            </p>

            <p>
              I maintain a personal homelab with replicated staging and
              production environments, practicing and deploying with{" "}
              <span className="font-semibold text-highlight">
                VMware, Ubuntu Server and Docker Compose
              </span>
              .
            </p>

            <p>
              Full-stack trained at{" "}
              <span className="font-semibold text-highlight">Ironhack</span> and
              currently preparing the{" "}
              <span className="font-semibold text-highlight">
                AWS Solutions Architect Associate
              </span>{" "}
              certification.
            </p>
          </>
        )}
      </motion.div>

      {/* MOBILE VERSION */}
      <motion.div className="block md:hidden text-base max-w-xl text-center space-y-4">
        {language === "es" ? (
          <>
            <p>
              Técnico de Sistemas en{" "}
              <span className="font-semibold">Santander Digital Services</span>,
              operando infraestructura crítica 24/7 con Linux y Mainframe IBM.
            </p>
            <p>
              Despliegues en producción con{" "}
              <span className="font-semibold">
                Docker, Nginx, AWS y Cloudflare
              </span>
              . Automatización con Bash y Python.
            </p>
            <p>
              Preparando certificación{" "}
              <span className="font-semibold">
                AWS Solutions Architect Associate
              </span>
              .
            </p>
          </>
        ) : (
          <>
            <p>
              Systems Engineer at{" "}
              <span className="font-semibold">Santander Digital Services</span>,
              operating critical 24/7 infrastructure with Linux and IBM
              Mainframe.
            </p>
            <p>
              Production deployments with{" "}
              <span className="font-semibold">
                Docker, Nginx, AWS and Cloudflare
              </span>
              . Automation with Bash and Python.
            </p>
            <p>
              Currently preparing the{" "}
              <span className="font-semibold">
                AWS Solutions Architect Associate
              </span>{" "}
              certification.
            </p>
          </>
        )}
      </motion.div>
    </motion.section>
  );
};

export default About;
