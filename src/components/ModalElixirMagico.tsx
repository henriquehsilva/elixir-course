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
        <Flame size={18} /> Ver Módulos de Magia
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
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Módulos de Treinamento em Magia... digo, Elixir</h2>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✨ Introdução à Magia Funcional
                </li>
                <li>✨ Conjurando Funções Imutáveis</li>
                <li>✨ Processos Leves e Rituais Confiáveis</li>
                <li>✨ Feitiços com Phoenix e LiveView</li>
              </ul>
              <button
                onClick={() => setOpen(false)}
                className="mt-6 w-full py-2 bg-purple-700 hover:bg-purple-800 text-white rounded"
              >
                Fechar o Grimório
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
