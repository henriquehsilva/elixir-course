// Aula3.tsx
import { Flame, FileCode2, ClipboardCopy } from 'lucide-react';
import CommentSection from '../components/CommentSection';

export default function Aula3() {
  return (
    <div className="mt-8 bg-[#1f1f1f] rounded-lg overflow-hidden">      
      <div className="p-6 space-y-4">
        <h2 className="text-3xl font-bold text-purple-400 flex items-center gap-2">
          <Flame size={28} /> Introdução aos Números em Ruby: Inteiros, Floats e Operações Básicas
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Nesta primeira aula, vamos explorar como o Ruby lida com números. Você aprenderá a diferença entre inteiros e números flutuantes (floats), como realizar operações matemáticas simples (adição, subtração, multiplicação e divisão) e como o Ruby trata divisões entre inteiros.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed">
          Também veremos como exibir resultados na tela usando <span className="text-purple-400">puts</span> e faremos pequenos exercícios práticos para fixar o conteúdo no Try Ruby.
        </p>

        <div className="mt-6 text-sm text-gray-400">
          📚 Material para estudo:
          <a
            href="https://henriquesilva.dev/pdf/apostila_do_curso_v1.0.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-purple-400 underline ml-1"
          >
            Apostila do Curso
          </a>
        </div>

        {/* Bloco de código */}
        <div className="flex justify-between items-center px-4 py-2 bg-[#2f2f2f] border-b border-[#333]">
          <span className="text-sm text-gray-400 flex items-center gap-2">
            <FileCode2 size={16} /> Exemplo (Ruby)
          </span>
          <button className="hover:text-purple-400">
            <ClipboardCopy size={18} />
          </button>
        </div>
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm font-mono">
            <div className="flex">
              <div className="mr-4 text-gray-500 select-none border-r border-purple-500 pr-4">
                {['1', '2', '3', '4'].map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
              <div className="text-gray-300 space-y-1">
                <div><span className="text-purple-400">puts</span> 1.0 + 2.0</div>
                <div><span className="text-purple-400">puts</span> 9 / 2</div>
                <div><span className="text-purple-400">puts</span> 9.0 / 2.0</div>
                <div><span className="text-purple-400">puts</span> 5 - 8</div>
              </div>
            </div>
            <div className="text-gray-500 mt-4">
              <p>&gt;&gt;&gt; puts 1.0 + 2.0</p>
              <p>3.0</p>
              <p>&gt;&gt;&gt; puts 9 / 2</p>
              <p>4</p>
              <p>&gt;&gt;&gt; puts 9.0 / 2.0</p>
              <p>4.5</p>
              <p>&gt;&gt;&gt; puts 5 - 8</p>
              <p>-3</p>
              <p>=&gt; nil</p>
            </div>
          </code>
        </pre>

        <div className="px-6 pb-10 pt-4 text-gray-300">
          <p>✨ Esse é o primeiro passo da nossa jornada. Vamos seguir juntos explorando esse novo universo com curiosidade e coragem!</p>
        </div>

        <CommentSection />
      </div>
    </div>
  );
}