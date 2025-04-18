import { useEffect, useState } from 'react';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  doc,
  updateDoc,
  arrayUnion
} from 'firebase/firestore';

export default function CommentSection() {
  const [comments, setComments] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'comments'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setComments(data);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async () => {
    if (!name || !message) return;
    await addDoc(collection(db, 'comments'), {
      name,
      message,
      timestamp: new Date(),
      likes: 0,
      replies: []
    });
    setName('');
    setMessage('');
  };

  const handleReply = async (commentId: string, replyName: string, replyMessage: string) => {
    const commentRef = doc(db, 'comments', commentId);
    await updateDoc(commentRef, {
      replies: arrayUnion({ name: replyName, message: replyMessage, timestamp: new Date() })
    });
  };

  const handleLike = async (commentId: string) => {
    const commentRef = doc(db, 'comments', commentId);
    const comment = comments.find((c) => c.id === commentId);
    if (!comment) return;
    await updateDoc(commentRef, {
      likes: (comment.likes || 0) + 1
    });
  };

  return (
    <div className="p-6 border-t border-purple-800 bg-[#1a1a1a]">
      <h2 className="text-2xl text-purple-400 font-bold mb-4">💬 Comentários Encantados</h2>

      <div className="mt-6">
        <h3 className="text-white font-semibold mb-2">Deixe sua mensagem:</h3>
        <input
          type="text"
          placeholder="Seu nome..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-2 p-2 rounded bg-[#2f2f2f] text-white border border-[#444]"
        />
        <textarea
          placeholder="Sua mensagem..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full mb-2 p-2 rounded bg-[#2f2f2f] text-white border border-[#444]"
        />
        <button
          onClick={handleSubmit}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-500"
        >
          Enviar Comentário
        </button>
      </div>

      <div className="space-y-4 mt-8">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-[#2a2a2a] p-4 rounded-lg">
            <p className="text-white font-semibold">{comment.name}</p>
            <p className="text-gray-300 mt-1">{comment.message}</p>
            <div className="flex gap-4 mt-2">
              <button
                onClick={() => handleLike(comment.id)}
                className="text-purple-400 text-sm hover:underline"
              >
                👍 {comment.likes || 0}
              </button>
            </div>

            {/* Respostas */}
            <div className="ml-4 mt-4 space-y-2">
              {comment.replies?.map((reply: any, i: number) => (
                <div key={i} className="text-sm text-gray-400 border-l-2 border-purple-600 pl-2">
                  <span className="text-white font-medium">{reply.name}:</span> {reply.message}
                </div>
              ))}

              <ReplyForm commentId={comment.id} onReply={handleReply} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReplyForm({ commentId, onReply }: { commentId: string; onReply: (commentId: string, replyName: string, replyMessage: string) => void }) {
  const [replyName, setReplyName] = useState('');
  const [replyMessage, setReplyMessage] = useState('');

  const handleSubmit = () => {
    if (!replyMessage.trim() || !replyName.trim()) return;
    onReply(commentId, replyName, replyMessage);
    setReplyMessage('');
    setReplyName('');
  };

  return (
    <div className="mt-2 space-y-2">
      <input
        type="text"
        placeholder="Seu nome..."
        value={replyName}
        onChange={(e) => setReplyName(e.target.value)}
        className="w-full p-2 text-sm bg-[#2f2f2f] border border-[#444] text-white rounded"
      />
      <input
        type="text"
        placeholder="Responder..."
        value={replyMessage}
        onChange={(e) => setReplyMessage(e.target.value)}
        className="w-full p-2 text-sm bg-[#2f2f2f] border border-[#444] text-white rounded"
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
      />
    </div>
  );
}