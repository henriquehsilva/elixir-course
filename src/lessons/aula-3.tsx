import { Flame, FileCode2, ClipboardCopy, BrainCog, Globe, Terminal } from 'lucide-react';

export default function Aula3() {
  return (
    <div className="mt-8 bg-[#1f1f1f] rounded-lg overflow-hidden">      
      <div className="p-6 space-y-4">
        <h2 className="text-3xl font-bold text-purple-400 flex items-center gap-2">
          <Flame size={28} /> Elixir: A Elegância da Concorrência
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          <span className="text-purple-400">Elixir</span> é uma linguagem moderna que une o poder da concorrência com uma sintaxe acessível e produtiva. Criada por <span className="text-purple-400">José Valim</span>, seu propósito é claro: resolver desafios de escalabilidade, tolerância a falhas e alta performance sem sacrificar a experiência do desenvolvedor.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed">
          Rodando sobre a máquina virtual <span className="text-purple-400">BEAM</span>, herda toda a robustez do <span className="text-purple-400">Erlang</span>, uma tecnologia que já provou seu valor em sistemas como o chat do Facebook e o WhatsApp, processando milhões de mensagens com eficiência impressionante.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed">
          Mas enquanto o Erlang entrega potência com uma sintaxe mais rígida, o Elixir surge como uma camada elegante, trazendo clareza, abstrações modernas e ferramentas que aceleram o desenvolvimento. Recursos como <span className="text-purple-400">hot swapping</span> e a comunicação por mensagens entre processos tornam o Elixir ideal para sistemas distribuídos e resilientes.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed">
          Com o framework <span className="text-purple-400">Phoenix</span>, criar aplicações web escaláveis e performáticas se torna uma tarefa quase mágica. Não é à toa que o Elixir vem conquistando espaço em empresas inovadoras e se destacando em conferências ao redor do mundo.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed italic">
          “Ao unir a solidez do Erlang com a elegância de uma linguagem contemporânea, Elixir transforma complexidade em produtividade.”
        </p>

        <div className="mt-6 text-sm text-gray-400">
          Explore mais sobre essa arte poderosa:
          <a
            href="https://elixir-lang.org"
            target="_blank"
            rel="noreferrer"
            className="text-purple-400 underline ml-1"
          >
            elixir-lang.org
          </a>
        </div>

        <h2 className="text-2xl font-bold text-purple-400 flex items-center gap-2 mt-10">
          <BrainCog size={24} /> O Poder do Paradigma Funcional
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          O <span className="text-purple-400">paradigma funcional</span> é uma abordagem que transforma a maneira como pensamos e construímos software. 
          Em vez de controlar estados mutáveis, trabalhamos com funções puras e previsíveis, onde dados fluem e são transformados de forma clara e segura.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed">
          Com linguagens como <span className="text-purple-400">Elixir</span>, essa filosofia ganha ainda mais força, aproveitando arquiteturas modernas e garantindo sistemas escaláveis e resilientes.
          Embora exija uma mudança de mentalidade, o retorno em clareza, performance e manutenção compensa cada linha de código aprendida.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed italic">
          “Aprender programação funcional não é apenas sobre código — é sobre enxergar soluções de forma mais elegante e eficiente.”
        </p>

        <div className="mt-6 text-sm text-gray-400">
          Recomendo a leitura:
          <a
            href="https://learnxinyminutes.com/docs/elixir/"
            target="_blank"
            rel="noreferrer"
            className="text-purple-400 underline ml-1"
          >
            Guia rápido de Elixir
          </a>
        </div>

        {/* Exemplo de Código Mantido */}
        <div className="rounded-lg overflow-hidden border border-[#333]">
          <div className="flex justify-between items-center px-4 py-2 bg-[#2f2f2f] border-b border-[#333]">
            <span className="text-sm text-gray-400 flex items-center gap-2">
              <FileCode2 size={16} /> Exemplo de Concorrência com Elixir
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
                  <div><span className="text-purple-400">spawn</span>(fn -&gt;</div>
                  <div className="ml-4"><span className="text-purple-400">IO.puts</span>("Processo concorrente ativo!")</div>
                  <div>&nbsp;end)</div>
                  <div><span className="text-purple-400">IO.puts</span>("Processo principal continua...")</div>
                </div>
              </div>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
