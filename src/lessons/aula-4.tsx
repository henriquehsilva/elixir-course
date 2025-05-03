// Aula3.tsx
import { ClipboardCopy, Terminal, FileCode2, PlayCircle } from 'lucide-react';

export default function Aula4() {
  return (
    <div className="mt-8 bg-[#1f1f1f] rounded-lg overflow-hidden">
      {/* Introdução ao IEx */}
      <div className="p-6 space-y-4">
        <h2 className="text-3xl font-bold text-purple-400 flex items-center gap-2">
          <Terminal size={28} /> IEx — O Oráculo Interativo
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Em sua jornada pelo reino funcional, o mago Elixir oferece um espelho encantado chamado <span className="text-purple-400">IEx</span>, abreviação de Interactive Elixir.
          Trata-se de um REPL — um portal místico que interpreta seus feitiços linha a linha, revelando suas consequências imediatamente.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Para evocá-lo, basta digitar <code className="text-purple-400">iex</code> no terminal. Ele responderá com uma saudação arcana e aguardará suas instruções. 
          E quando quiser encerrar a sessão, invoque <code className="text-purple-400">Ctrl+C</code> duas vezes.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed italic">
          “Tudo o que é avaliado no IEx retorna com sabedoria — mesmo os feitiços mais simples podem revelar grandes verdades.” — Arquivista Erlangius
        </p>

        <div className="rounded-lg overflow-hidden border border-[#333]">
          <div className="flex justify-between items-center px-4 py-2 bg-[#2f2f2f] border-b border-[#333]">
            <span className="text-sm text-gray-400 flex items-center gap-2">
              <FileCode2 size={16} /> Primeiro Encantamento
            </span>
            <button className="hover:text-purple-400">
              <ClipboardCopy size={18} />
            </button>
          </div>
          <pre className="p-4 overflow-x-auto bg-[#2a2a2a] rounded-b-lg">
            <code className="text-sm font-mono">
              <div className="flex">
                <div className="mr-4 text-gray-500 select-none border-r border-purple-500 pr-4">
                  {['1', '2', '3', '4'].map(line => <div key={line}>{line}</div>)}
                </div>
                <div className="text-gray-300 space-y-1">
                  <div>iex&gt; IO.puts "Hello World"</div>
                  <div>Hello World</div>
                  <div>:ok</div>
                  <div>iex&gt; 5 * 4</div>
                  <div>20</div>
                </div>
              </div>
            </code>
          </pre>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed">
          O retorno <code className="text-purple-400">:ok</code> é um átomo — uma forma simbólica usada para sinalizar que o feitiço teve êxito.
          Em Elixir, muitos encantamentos retornam <code className="text-purple-400">:ok</code> ou <code className="text-purple-400">:error</code> como sinalizadores do destino da invocação.
        </p>

        <h3 className="text-2xl text-purple-400 font-semibold mt-8">Consultando o Grimório</h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          Quando a memória falha, o <code className="text-purple-400">h</code> é seu aliado. Ele revela os segredos de qualquer função ou módulo:
        </p>

        <div className="rounded-lg overflow-hidden border border-[#333]">
          <div className="flex justify-between items-center px-4 py-2 bg-[#2f2f2f] border-b border-[#333]">
            <span className="text-sm text-gray-400 flex items-center gap-2">
              <PlayCircle size={16} /> Invocando o Conhecimento
            </span>
            <button className="hover:text-purple-400">
              <ClipboardCopy size={18} />
            </button>
          </div>
          <pre className="p-4 overflow-x-auto bg-[#2a2a2a] rounded-b-lg">
            <code className="text-sm font-mono">
              <div className="flex">
                <div className="mr-4 text-gray-500 select-none border-r border-purple-500 pr-4">
                  {['1', '2', '3', '4', '5'].map(line => <div key={line}>{line}</div>)}
                </div>
                <div className="text-gray-300 space-y-1">
                  <div>iex&gt; h()</div>
                  <div>iex&gt; h(Enum)</div>
                  <div>iex&gt; h(Enum.reverse)</div>
                  <div>iex&gt; h(Enum.reverse/1)</div>
                  <div>iex&gt; h(Enum.reverse/2)</div>
                </div>
              </div>
            </code>
          </pre>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed">
          A aridade é a quantidade de ingredientes que uma função exige — um número sagrado que determina sua forma.
          Funções como <code className="text-purple-400">clear/0</code> não esperam argumentos, enquanto <code className="text-purple-400">c/2</code> aceita dois.
        </p>

        <div className="mt-6 text-sm text-gray-400">
          Consulte os manuscritos oficiais:
          <a
            href="https://hexdocs.pm/iex/IEx.html"
            target="_blank"
            rel="noreferrer"
            className="text-purple-400 underline ml-1"
          >
            hexdocs.pm/iex/IEx.html
          </a>
        </div>

        <h3 className="text-2xl text-purple-400 font-semibold mt-8">Missões Práticas</h3>
        <ul className="text-gray-300 list-disc list-inside space-y-2">
          <li>Execute cálculos aritméticos no IEx.</li>
          <li>Explore os comandos <code>h/1</code> e <code>i/1</code> para entender funções e valores.</li>
          <li>Use <code>Enum.</code> seguido de <kbd>TAB</kbd> para autocompletar feitiços do módulo.</li>
          <li>Leia a documentação do Elixir para dominar seus artefatos.</li>
        </ul>
      </div>
    </div>
  );
}