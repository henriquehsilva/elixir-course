// Aula2.tsx
import { ClipboardCopy, PlayCircle } from 'lucide-react';

export default function Aula2() {
  return (
    <div className="mt-8 bg-[#1f1f1f] rounded-lg overflow-hidden">
      <div className="p-6 space-y-4">
        <h2 className="text-3xl font-bold text-purple-400 flex items-center gap-2">
          <PlayCircle size={28} /> Primeira Live de Mentoria – Curso de Programação do Tio Rick 👨‍💻🔥
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Na primeira live da mentoria do Curso de Programação do Tio Rick, apresentei toda a estrutura do curso, mostrei as ferramentas que vamos usar, falei sobre o material didático e para quem essa jornada foi pensada. Também respondi dúvidas ao vivo e compartilhei dicas valiosas para quem está começando no mundo da programação.
        </p>
        <ul className="text-gray-300 text-lg list-disc list-inside space-y-2">
          <li>📚 Assista até o final e aproveite o conteúdo!</li>
          <li>👾 Indicado para jovens iniciantes e curiosos da tecnologia!</li>
        </ul>
        <p className="text-gray-400">Deixe seu like, compartilhe e se inscreva para não perder os próximos encontros!</p>
        <div className="text-sm text-gray-500 pt-4">
          #CursoDoTioRick #ProgramaçãoParaIniciantes #MentoriaTech #LiveProgramação #AprenderProgramação
        </div>
      </div>
    </div>
  );
}
