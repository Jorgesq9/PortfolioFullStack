import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      console.log("Mensaje enviado:", formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-8 bg-background text-textLight snap-start"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.h2
        className="text-4xl font-bold mb-6"
        style={{ color: "#C29B39" }}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Contáctame
      </motion.h2>
      <motion.p
        className="text-center text-lg mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Puedes escribirme a{" "}
        <a
          href="mailto:jorgeesquivait@gmail.com"
          className="text-blue-400 hover:underline"
        >
          jorgeesquivait@gmail.com
        </a>
      </motion.p>

      {!isSubmitted ? (
        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-600 text-white focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-600 text-white focus:outline-none"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Mensaje</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-600 text-white focus:outline-none h-32"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded font-bold transition"
          >
            Enviar
          </button>
        </motion.form>
      ) : (
        <motion.p
          className="text-green-400 font-bold text-lg mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
        </motion.p>
      )}
    </motion.section>
  );
};

export default Contact;
