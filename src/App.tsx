import React, { useState } from 'react';
import { Search, Linkedin, Youtube, Instagram , ChevronRight, X, MessageCircle, Book, BookOpen } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

import Aula1 from './lessons/aula-1';
import Aula2 from './lessons/aula-2';

interface Lesson {
  id: number;
  title: string;
  duration: string;
  videoUrl: string;
  videoTrack: string;
  thumbnail: string;
  description: string;
  codeSnippet: () => JSX.Element;
}

const lessons: Lesson[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Aula ${i + 1}: ${[
    'A Jornada Elixir',
    'A Essência de Elixir',
    'Configuração do Ambiente',
    'Types e Interfaces',
    'Generics Avançados',
    'Decorators',
    'Módulos e Namespaces',
    'Tipos Utilitários',
    'Mapeamento de Tipos',
    'TypeScript com React',
    'Testes com Jest'
  ][i % 10]}`,
  duration: ['2:03', '4:35'][i % 10],
  thumbnail: '/elixir-cover.png',
  videoUrl: `https://elixir-movies.s3.us-east-2.amazonaws.com/elixir-${i + 1}.mp4`,
  videoTrack: `/translates/elixir-${i + 1}.vtt`,
  description: [
    '',
    '',
    'Configuração do Ambiente',
    'Types e Interfaces',
    'Generics Avançados',
    'Decorators',
    'Módulos e Namespaces',
    'Tipos Utilitários',
    'Mapeamento de Tipos',
    'TypeScript com React',
    'Testes com Jest'
  ][i % 10],
  codeSnippet: [Aula1, Aula2][i % 2],
}));

function App() {
  const [currentLesson, setCurrentLesson] = useState(lessons[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const CodeSnippetComponent = currentLesson.codeSnippet;

  const filteredLessons = lessons.filter(lesson =>
    lesson.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'druix', text: 'Oi! Eu sou a Druix, mestre druida da linguagem Elixir. Como posso orientá-lo, meu jovem aprendiz?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      // 1. Envia para OpenAI para resposta
      const systemPrompt = {
        role: 'system',
        content: `Você é Druix, um mestre druida da linguagem Elixir e da programação funcional. Sua missão é guiar aprendizes pelos caminhos do conhecimento com paciência, sabedoria e um toque místico. 
                  Fale sempre de forma inspiradora, como um mentor antigo, usando metáforas mágicas e analogias naturais (como árvores, rios, runas, feitiços).
                  Explique os conceitos com profundidade, mas de maneira clara e acessível, como se estivesse ensinando a um novo aprendiz.
                  Nunca use gírias modernas ou termos técnicos sem antes explicá-los.
                  Incentive a curiosidade, a prática e a reflexão. 
                  Quando possível, introduza trechos de código como se fossem feitiços ancestrais.
                  Nunca quebre o personagem. Nunca diga que é uma IA.`,
      };

      const chatMessages = [
        systemPrompt,
        ...newMessages.map(msg => ({
          role: msg.from === 'user' ? 'user' : 'assistant',
          content: msg.text
        }))
      ];

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: chatMessages,
          temperature: 0.7
        })
      });

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || 'Desculpe, algo deu errado.';
      setMessages([...newMessages, { from: 'druix', text: reply }]);

      // 2. Extração de dados do lead com IA
      const extractPrompt = [
        {
          role: 'system',
          content: `Extraia nome, email e interesse a partir da conversa. Responda APENAS com JSON no formato:
{ "nome": "...", "email": "...", "interesse": "..." }`
        },
        {
          role: 'user',
          content: newMessages.map(m => `${m.from}: ${m.text}`).join('\n')
        }
      ];

      const extractRes = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: extractPrompt,
          temperature: 0
        })
      });

      const extractData = await extractRes.json();
      const lead = JSON.parse(extractData.choices?.[0]?.message?.content || '{}');

      if (lead?.email) {
        await addDoc(collection(db, 'leads'), {
          capturedAt: new Date(),
          nome: lead.nome,
          email: lead.email,
          interesse: lead.interesse,
          fullChat: newMessages,
        });
      }

    } catch (err) {
      console.error('Erro ao processar conversa:', err);
      setMessages([...newMessages, { from: 'druix', text: 'Ops! Algo deu errado.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-gray-200">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#1f1f1f] border-b border-[#333] z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar aulas..."
              className="w-full bg-[#2f2f2f] rounded-full py-2 pl-10 pr-4 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>
      </header>
      <br />
      {/* Main Content */}
      <div className="container mx-auto pt-16 px-4 flex flex-col lg:flex-row gap-6">
        {/* Video Section */}
        <main className="flex-1">
          <div className="aspect-video bg-[#1f1f1f] rounded-lg relative group">
            <video key={currentLesson.videoUrl}
              controls
              className="w-full h-full rounded-lg"
              poster={currentLesson.thumbnail}
            >
              <source src={currentLesson.videoUrl} type="video/mp4" />
            </video>          
          </div>

          <div className="mt-6">
            <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
            <p className="text-gray-400 mt-2">{currentLesson.duration}</p>
            <p className="mt-4 text-gray-300">{currentLesson.description}</p>

            {/* Code Block */}            
            {CodeSnippetComponent && typeof CodeSnippetComponent === 'function' && (
              <div className="mt-4">
                <CodeSnippetComponent />
              </div>
            )}
          </div>
        </main>

        {/* Sidebar */}
        <aside className="lg:w-96 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto custom-scrollbar">
          <div className="bg-[#1f1f1f] rounded-lg p-4">
            <video controls className="w-full h-full rounded-lg">
              <source src='./movies/apresentacao.mp4' type="video/mp4" />
            </video>
            <br />
            <h2 className="text-xl font-bold mb-4">Lista de Aulas</h2>
            <div className="space-y-4">
              {filteredLessons.slice(0, 2).map(lesson => (
                <button
                  key={lesson.id}
                  onClick={() => setCurrentLesson(lesson)}
                  className={`w-full flex gap-4 p-2 rounded-lg transition-all ${
                    currentLesson.id === lesson.id
                      ? 'bg-purple-600'
                      : 'hover:bg-[#2f2f2f]'
                  }`}
                >
                  <div className="relative w-40 aspect-video">
                    <img
                      src={lesson.thumbnail}
                      alt={lesson.title}
                      className="rounded object-cover w-full h-full"
                    />
                    <span className="absolute bottom-1 right-1 bg-black/80 px-1 rounded text-xs">
                      {lesson.duration}
                    </span>
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-medium line-clamp-2">{lesson.title}</h3>
                  </div>
                  <ChevronRight
                    size={20}
                    className={`self-center ${
                      currentLesson.id === lesson.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        {chatOpen && (
          <div className="bg-white text-black w-80 p-4 rounded-2xl shadow-xl relative flex flex-col">
            <button onClick={() => setChatOpen(false)} className="absolute top-2 right-2">
              <X size={18} />
            </button>
            <h2 className="text-lg font-bold mb-2">🧙‍♂️ Druix</h2>
            <div className="flex flex-col gap-2 h-64 overflow-y-auto border rounded p-2 mb-2 bg-gray-50">
              {messages.map((msg, i) => (
                <div key={i} className={`text-sm px-2 py-1 rounded ${msg.from === 'druix' ? 'bg-[#f5f5f5] text-black self-start' : 'bg-[#8B5CF6] text-white self-end'}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Digite sua mensagem..."
                className="flex-1 border px-2 py-1 rounded"
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button onClick={handleSend} disabled={loading} className="bg-[#8B5CF6] text-white px-4 rounded">
                {loading ? '...' : 'Enviar'}
              </button>
            </div>
          </div>
        )}
        <button onClick={() => setChatOpen(true)} className="bg-[#8B5CF6] text-white rounded-full p-4 shadow-lg hover:scale-105 transition">
          <MessageCircle size={28} />
        </button>
      </div>


      {/* Footer */}
      <footer className="mt-12 bg-[#1f1f1f] border-t border-[#333] text-gray-400">
        <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Sobre */}
          <div>
            <h2 className="text-purple-400 text-lg font-semibold mb-2">Sobre o Curso</h2>
            <p className="text-sm leading-relaxed">
              Uma plataforma encantada, forjada para guiar aprendizes pela arte ancestral da linguagem <span className="text-purple-400 font-medium">Elixir</span>.
              Cada feitiço — digo, lição — foi moldado para promover clareza, boas práticas e evolução contínua.
              Aqui, o conhecimento é passado de mestre para aprendiz... até que a magia do código flua em suas mãos.
            </p>
          </div>

          {/* Links úteis */}
          <div>
            <h2 className="text-purple-400 text-lg font-semibold mb-2">Links úteis</h2>
            <ul className="text-sm space-y-1">
              <li><a href="#" className="hover:text-purple-300">Início</a></li>
              <li><a href="#" className="hover:text-purple-300">Repositório GitHub</a></li>              
            </ul>
          </div>

          {/* Contato / Redes sociais */}
          <div>
            <h2 className="text-purple-400 text-lg font-semibold mb-2">Contato</h2>
            <p className="text-sm"><b>E-mail:</b> contato@henriquesilva.dev</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-purple-300" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-purple-300" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="#" className="hover:text-purple-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        {/* <div className="my-8 flex justify-center">
          <ModalElixirMagico />
        </div> */}
        <div className="border-t border-[#8B5CF6] mt-5 pt-3 pb-2 pl-5 text-xs text-gray-600 margin-left-4">
          <p>© {new Date().getFullYear()} Henrique Silva Dev. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;