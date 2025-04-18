// Aula2.tsx
import { ClipboardCopy, Flame, PlayCircle, FileCode2, Laptop, Apple, Terminal, Monitor } from 'lucide-react';

export default function Aula2() {

  const ultimo = '3';
  const nova_lista = [1, 2];

  return (
    <div className="mt-8 bg-[#1f1f1f] rounded-lg overflow-hidden">
      {/* Introdução Mítica */}
      <div className="p-6 space-y-4">
        <h2 className="text-3xl font-bold text-purple-400 flex items-center gap-2">
          <Flame size={28} /> A Magia da Funcionalidade
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          À primeira vista, os feitiços de <span className="text-purple-400">Ruby</span> e <span className="text-purple-400">Elixir</span> podem parecer semelhantes.
          Mas, cuidado jovem mago — embora suas runas se pareçam, suas essências são completamente distintas.
          Elixir é uma magia funcional e imutável, forjada na fornalha da máquina BEAM, onde os processos dançam em harmonia.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Enquanto Ruby invoca objetos encantados que combinam dados e poderes (métodos), Elixir exige que entreguemos os ingredientes (dados) diretamente aos feitiços (funções).
          Aqui não há herança — há composição, pureza e previsibilidade. Não temas a simplicidade. Em Elixir, cada runa tem seu propósito.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed italic">
          “Para muitos, inclusive este escriba, a imutabilidade é como o pergaminho sagrado: uma vez escrito, seu valor está em permanecer íntegro.” — Mestre Funcionalis
        </p>

        <div className="mt-6 text-sm text-gray-400">
          Consulte os manuscritos oficiais:
          <a
            href="https://elixir-lang.org/install.html"
            target="_blank"
            rel="noreferrer"
            className="text-purple-400 underline ml-1"
          >
            elixir-lang.org/install.html
          </a>
        </div>

        <div className="rounded-lg overflow-hidden border border-[#333]">
          <div className="flex justify-between items-center px-4 py-2 bg-[#2f2f2f] border-b border-[#333]">
            <span className="text-sm text-gray-400 flex items-center gap-2">
              <FileCode2 size={16} /> Magia Mutável (Exemplo Ruby)
            </span>
            <button className="hover:text-purple-400">
              <ClipboardCopy size={18} />
            </button>
          </div>
          <pre className="p-4 overflow-x-auto bg-[#2a2a2a] rounded-b-lg">
            <code className="text-sm font-mono">
              <div className="flex">
                <div className="mr-4 text-gray-500 select-none border-r border-purple-500 pr-4">
                  {['1', '2', '3', '4', '5', '6'].map(line => <div key={line}>{line}</div>)}
                </div>
                <div className="text-gray-300 space-y-1">
                  <div><span className="text-yellow-400">list</span> = [1, 2, 3]</div>
                  <div><span className="text-yellow-400">list.pop</span></div>
                  <div><span className="text-gray-400"># = 3</span></div>
                  <div><span className="text-yellow-400">p list</span></div>
                  <div><span className="text-gray-400"># = [1, 2]</span></div>
                </div>
              </div>
            </code>
          </pre>
        </div>

        <div className="rounded-lg overflow-hidden border border-[#333]">
          <div className="flex justify-between items-center px-4 py-2 bg-[#2f2f2f] border-b border-[#333]">
            <span className="text-sm text-gray-400 flex items-center gap-2">
              <FileCode2 size={16} /> Feitiço Imutável (Exemplo Elixir)
            </span>
            <button className="hover:text-purple-400">
              <ClipboardCopy size={18} />
            </button>
          </div>
          <pre className="p-4 overflow-x-auto bg-[#2a2a2a] rounded-lg">
            <code className="text-sm font-mono">
              <div className="flex">
                <div className="mr-4 text-gray-500 select-none border-r border-purple-500 pr-4">
                  {['1', '2', '3', '4', '5', '6', '7'].map(line => <div key={line}>{line}</div>)}
                </div>
                <div className="text-gray-300 space-y-1">
                  <div><span className="text-purple-400">list</span> = [1, 2, 3]</div>
                  <div><span className="text-purple-400">{'{last, new_list}'}</span> = List.pop_at(lista, -1)</div>
                  <div><span className="text-gray-400"># = last = 3</span></div>
                  <div><span className="text-gray-400"># = new_list = [1, 2]</span></div>
                  <div><span className="text-purple-400">IO.inspect(list)</span></div>
                  <div><span className="text-gray-400"># = [1, 2, 3]</span></div>
                </div>
              </div>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
