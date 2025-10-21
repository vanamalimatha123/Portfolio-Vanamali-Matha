import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6">
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm <span className="text-blue-400">Vanamali Matha</span>
      </motion.h1>

      <motion.h2
        className="text-2xl md:text-3xl mb-4 text-gray-300"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        IT Project Coordinator | Service Delivery Specialist
      </motion.h2>

      <motion.p
        className="max-w-2xl text-gray-400 text-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Passionate about ITSM, ServiceNow, and end-to-end project delivery — bridging technology, people, and process to drive business excellence.
      </motion.p>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <a
          href="mailto:mathavanamali121@gmail.com"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-2xl font-medium transition"
        >
          Contact Me
        </a>
        <a
          href="https://linkedin.com/in/vanamalimatha"
          target="_blank"
          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-2xl font-medium transition"
        >
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
}
