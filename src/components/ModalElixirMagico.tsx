import { useState } from 'react';
import { Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ModalElixirMagico() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-50">
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-full shadow-lg flex items-center gap-2"
      >
        <Flame size={18} /> Grimório do Aprendiz
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50, filter: 'blur(20px)' }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.8, y: 50, filter: 'blur(20px)' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="bg-[#111] text-white max-w-md w-full p-6 rounded-2xl shadow-xl border border-purple-800 relative"
              style={{ boxShadow: '0 0 40px rgba(168, 85, 247, 0.3)' }}
            >
              <img src='/grimorio-capa.png' alt="Grimório" className="w-full h-auto rounded-lg mb-4" />
              <button
                onClick={() => setOpen(false)}
                className="mt-6 w-40 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded"
              >
                Fechar o Grimório
              </button>
              <a href="https://prog-aprendiz-book.henriquesilva.dev/" target="_blank" rel="noopener noreferrer"            
                className="mt-10 ml-20 w-full py-2 px-5 bg-purple-700 hover:bg-purple-800 text-white rounded"
              >
                Abrir o Grimório
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
