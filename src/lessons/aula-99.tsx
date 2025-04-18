import { ClipboardCopy } from 'lucide-react';

export default function Aula1() {
  return (
    <div className="mt-8 bg-[#1f1f1f] rounded-lg overflow-hidden">
      <div className="flex justify-between items-center px-4 py-2 bg-[#2f2f2f] border-b border-[#333]">
        <span className="text-sm text-gray-400">Elixir</span>
        <button className="hover:text-purple-400">
          <ClipboardCopy size={18} />
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono">
          <div className="flex">
            <div className="mr-4 text-gray-500 select-none border-r border-purple-500 pr-4">
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
            <div className="text-gray-300">
              <div><span className="text-purple-400">interface</span> <span className="text-blue-400">Teste</span> {'{'}</div>
              <div>  <span className="text-purple-300">id:</span> <span className="text-yellow-300">string</span>;</div>
              <div>  <span className="text-purple-300">name:</span> <span className="text-yellow-300">string</span>;</div>
              <div>  <span className="text-purple-300">email:</span> <span className="text-yellow-300">string</span>;</div>
              <div>{'}'}</div>
            </div>
          </div>
        </code>
      </pre>
    </div>
  );
}
