import { ClipboardCopy, FileCode2 } from 'lucide-react';
import CommentSection from '../components/CommentSection';

export default function Aula1() {
  return (
    <div className="mt-8 bg-[#1f1f1f] rounded-lg overflow-hidden">

      {/* Introdução temática */}
      <div className="p-6 space-y-4">
        <h2 className="text-3xl font-bold text-purple-400 flex items-center gap-2">
          🧠 Introdução à Programação com Tio Rick
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Seja muito bem-vindo(a) à nossa primeira aula! Neste vídeo, eu, Tio Rick, compartilho um pouco sobre o meu perfil profissional, como entrei na área de tecnologia e por que acredito que programar é para todos.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Nesta aula introdutória você vai aprender:
        </p>
        <ul className="list-disc list-inside text-gray-300 text-lg leading-relaxed">
          <li>✅ O que é programação (de forma simples e direta)</li>
          <li>✅ Por que aprender lógica muda o jeito como pensamos</li>
          <li>✅ O que são linguagens de programação e para que servem</li>
          <li>✅ Por que escolhemos a linguagem Ruby para iniciar</li>
          <li>✅ Dicas para quem está começando e quer perder o medo do código</li>
        </ul>
        <p className="text-gray-300 text-lg leading-relaxed">
          📌 Este vídeo é parte de uma jornada guiada para quem quer aprender a programar do zero, com explicações acessíveis, exemplos práticos e aquela conversa boa de quem ensina com coração.
        </p>
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
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
            <div className="text-gray-300">
              <div><span className="text-purple-400">puts</span> <span className="text-green-400">"Olá, mundo!"</span></div>
            </div>
          </div>
          <div className="text-gray-500 mt-4">
            <p>&gt;&gt;&gt; puts "Olá, mundo!"</p>
            <p>Olá, mundo!</p>
            <p>=&gt; nil</p>
          </div>
        </code>
      </pre>

      <div className="px-6 pb-10 pt-4 text-gray-300">
        <p>✨ Esse é o primeiro passo da nossa jornada. Vamos seguir juntos explorando esse novo universo com curiosidade e coragem!</p>
      </div>

      <CommentSection />
    </div>
  );
}
