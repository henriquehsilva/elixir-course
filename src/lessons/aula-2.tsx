import { ClipboardCopy, Flame, PlayCircle, FileCode2, Laptop, Apple, Terminal, Monitor } from 'lucide-react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';

export default function Aula1() {
  return (
    <div className="mt-8 bg-[#1f1f1f] rounded-lg overflow-hidden">

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

      {/* Bloco de código */}
      <div className="flex justify-between items-center px-4 py-2 bg-[#2f2f2f] border-b border-[#333]">
        <span className="text-sm text-gray-400 flex items-center gap-2">
          <FileCode2 size={16} /> Exemplo de Código (Elixir)
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
              <div><span className="text-purple-400">IO.puts</span> <span className="text-green-400">"Bem vindo ao meu studio code!"</span></div>
            </div>
          </div>
          <div><span className="text-gray-500">
          <p>
           iex(1): IO.puts "Bem vindo ao meu studio code!"<br />
           Bem vindo ao meu studio code!<br />
           :ok</p>
            </span></div>
        </code>
      </pre>
    </div>
  );
}
