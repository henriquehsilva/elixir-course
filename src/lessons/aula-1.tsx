import { ClipboardCopy, Flame, PlayCircle, FileCode2, Laptop, Apple, Terminal, Monitor } from 'lucide-react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';
import CommentSection from '../components/CommentSection';
import { db } from './firebase';

export default function Aula1() {
  return (
    <div className="mt-8 bg-[#1f1f1f] rounded-lg overflow-hidden">

      {/* Introdução temática */}
      <div className="p-6 space-y-4">
        <h2 className="text-3xl font-bold text-purple-400 flex items-center gap-2">
          🧙‍♂️ Por que Elixir? Por que agora, jovem aprendix?
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Ahh… Nos últimos ciclos da lua, Elixir emergiu como uma das linguagens mais amadas entre os magos da programação, sejam eles mestres de grandes reinos (empresas) ou alquimistas solitários em suas cavernas de criação (hobbystas).
          Muitos a chamam de seu poder oculto de produtividade e estabilidade.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Ao final deste grimório — digo, tutorial — espero que tu compreendas por que tal encantamento tem encantado tantos feiticeiros do código.
        </p>
        <h3 className="text-2xl font-bold text-purple-400">O caminho do aprendizado</h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          Invocar uma nova linguagem não é tarefa leve...
          Torná-la pronta para batalha (produção) é ainda mais árduo...
          E convencer o senhor do castelo (teu chefe) a permitir sua magia em campo? Mais desafiador ainda.
          Mas, meu jovem, o elixir vale o ritual.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Elixir não apenas abre portais para novos paradigmas de pensamento, mas também transforma como conjuras feitiços até em outras linguagens.
          Assim como o conhecimento de Ruby molda tua visão de código, o domínio de Elixir expandirá tua mente como se tomasses uma poção de sabedoria ancestral.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Mesmo que nunca a uses nas linhas de frente, só o estudo dessa arte já te tornará um programador mais sagaz e iluminado.
        </p>
      </div>

      {/* Introdução sobre Elixir */}
      <div className="p-6 space-y-4">
        <h2 className="text-3xl font-bold text-purple-400 flex items-center gap-2">
          <Flame size={28} /> Elixir: Confiável, Concorrente e Elegante
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Elixir é uma linguagem de programação funcional e concorrente, construída sobre a robusta máquina virtual do Erlang (BEAM). Com foco em aplicações escaláveis, Elixir é usado em sistemas de telecomunicações, web em tempo real e IoT. Sua sintaxe limpa, ferramentas poderosas e modelo de concorrência leve o tornam ideal para arquiteturas resilientes.
        </p>

        {/* Thumbnail + Embed */}
        <div className="relative overflow-hidden rounded-lg border border-[#333]">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/lxYFOM3UJzo?si=fg7Ud0MxdagKlppb"
            title="Elixir: The Documentary"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="bg-[#2f2f2f] border border-[#444] rounded-lg p-4 flex items-center gap-4">
          <PlayCircle size={32} className="text-purple-500" />
          <div>
            <p className="text-white font-semibold">Assista ao documentário</p>
            <p className="text-sm text-gray-400">Entenda como o Elixir surgiu e o impacto da comunidade.</p>
          </div>
        </div>
      </div>

      {/* Tutorial de Instalação por S.O. */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-purple-400 flex items-center gap-2">
          <Laptop size={24} /> Como Instalar o Elixir
        </h3>
        <p className="text-gray-400 text-md">Escolha o seu sistema operacional abaixo para ver instruções passo a passo:</p>

        <Accordion type="single" collapsible className="border border-[#333] rounded-lg divide-y divide-[#333]">
          <AccordionItem value="macos">
            <AccordionTrigger className="px-4 py-2 flex items-center gap-2 text-white">
              <Apple size={20} /> macOS
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300 text-sm space-y-2">
              <p>1. Instale o Homebrew (se ainda não tiver):</p>
              <code className="block bg-[#2f2f2f] p-2 rounded">/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</code>
              <p>2. Instale Elixir com:</p>
              <code className="block bg-[#2f2f2f] p-2 rounded">brew install elixir</code>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="linux">
            <AccordionTrigger className="px-4 py-2 flex items-center gap-2 text-white">
              <Terminal size={20} /> Linux (Ubuntu/Debian)
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300 text-sm space-y-2">
              <p>1. Atualize os pacotes:</p>
              <code className="block bg-[#2f2f2f] p-2 rounded">sudo apt update</code>
              <p>2. Instale as dependências:</p>
              <code className="block bg-[#2f2f2f] p-2 rounded">sudo apt install -y elixir</code>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="windows">
            <AccordionTrigger className="px-4 py-2 flex items-center gap-2 text-white">
              <Monitor size={20} /> Windows
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300 text-sm space-y-2">
              <p>1. Baixe o instalador do Elixir no site oficial:</p>
              <a className="text-purple-400 underline" href="https://elixir-lang.org/install.html#windows" target="_blank" rel="noreferrer">elixir-lang.org/install.html#windows</a>
              <p>2. Execute o instalador e siga as instruções.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-6 text-sm text-gray-400">
          Para mais detalhes, consulte a documentação oficial:
          <a
            href="https://elixir-lang.org/install.html"
            target="_blank"
            rel="noreferrer"
            className="text-purple-400 underline ml-1"
          >
            elixir-lang.org/install.html
          </a>
        </div>
      </div>

      {/* Como testar instalação */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-purple-400 flex items-center gap-2">
          <Terminal size={24} /> Primeiro Encantamento no Terminal
        </h3>
        <p className="text-gray-300 leading-relaxed">
          🧙‍♂️ *Muito bem, jovem aprendiz... Agora que tens o Elixir instalado, é hora de testar os feitiços!*
        </p>
        <p className="text-gray-400">Abra o terminal mágico de seu sistema e invoque o seguinte comando:</p>
        <code className="block bg-[#2f2f2f] p-3 rounded"><span>$</span> <span className='text-green-400'>elixir -v</span></code>
        <p className="text-gray-300">Se tudo estiver correto, verás a versão do Elixir conjurada na tela. O ritual de instalação foi um sucesso!</p>

        <p className="text-gray-300 pt-4">
          Agora invoque o <strong className="text-purple-400">iex</strong>, também conhecido como o <em>Grimório Interativo de Elixir</em>:
        </p>
        <code className="block bg-[#2f2f2f] p-3 rounded"><span>$</span> <span className='text-green-400'>iex</span></code>
        <p className="text-gray-400">Dentro dele, poderás testar teus feitiços linha por linha, como um verdadeiro arquimago digital.</p>
      </div>

      {/* Bloco de código */}
      <div className="flex justify-between items-center px-4 py-2 bg-[#2f2f2f] border-b border-[#333]">
        <span className="text-sm text-gray-400 flex items-center gap-2">
          <FileCode2 size={16} /> Primeiro Encantamento (Exemplo Elixir)
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
              <div><span className="text-purple-400">IO.puts</span> <span className="text-green-400">"Seja bem-vindo à Terra-média."</span></div>
            </div>
          </div>
          <div className="text-gray-500 mt-4">
            <p>iex(1)&gt; IO.puts "Seja bem-vindo à Terra-média."</p>
            <p>Seja bem-vindo à Terra-média.</p>
            <p>:ok</p>
          </div>
        </code>
      </pre>

      <div className="px-6 pb-10 pt-4 text-gray-300">
        <p>🧙‍♂️ *Muito bem! Acabaste de conjurar tua primeira linha de código em Elixir. Que este seja o primeiro passo em tua longa jornada pela sabedoria funcional.*</p>
      </div>

      <CommentSection />
    </div>    

  );
}
