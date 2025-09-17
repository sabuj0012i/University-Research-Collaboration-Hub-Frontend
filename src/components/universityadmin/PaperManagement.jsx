import React, { useState } from "react";
import { Flag, Trash2, MessageSquare } from "lucide-react";
import CommentModal from "./CommentModal";

const PaperManagement = () => {
  const [papers, setPapers] = useState([
    { id: 1, title: "AI in Healthcare", flagged: false, comments: [] },
    { id: 2, title: "Quantum Computing Basics", flagged: false, comments: [] },
  ]);
  const [selectedPaper, setSelectedPaper] = useState(null);

  const removePaper = (id) => {
    setPapers(papers.filter((p) => p.id !== id));
  };

  const flagPaper = (id) => {
    setPapers(
      papers.map((p) =>
        p.id === id ? { ...p, flagged: !p.flagged } : p
      )
    );
  };

  const addComment = (id, comment) => {
    setPapers(
      papers.map((p) =>
        p.id === id ? { ...p, comments: [...p.comments, comment] } : p
      )
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">📄 Manage Research Papers</h2>

      {papers.map((paper) => (
        <div
          key={paper.id}
          className="bg-white border rounded-2xl shadow-md p-5 flex justify-between items-center hover:shadow-lg transition"
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{paper.title}</h3>
            {paper.flagged && (
              <span className="text-red-500 text-sm font-medium">⚑ Flagged</span>
            )}
            {paper.comments.length > 0 && (
              <p className="text-gray-500 text-sm mt-1">
                💬 {paper.comments.length} comment{paper.comments.length > 1 ? "s" : ""}
              </p>
            )}
          </div>

          <div className="flex gap-3">
            {/* Flag Button */}
            <button
              onClick={() => flagPaper(paper.id)}
              className={`p-2 rounded-lg border ${
                paper.flagged
                  ? "bg-red-100 border-red-400 text-red-600"
                  : "bg-white border-gray-300 text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Flag className="w-4 h-4" />
            </button>

            {/* Comment Button */}
            <button
              onClick={() => setSelectedPaper(paper)}
              className="p-2 rounded-lg border bg-white border-gray-300 text-gray-600 hover:bg-gray-100"
            >
              <MessageSquare className="w-4 h-4" />
            </button>

            {/* Delete Button */}
            <button
              onClick={() => removePaper(paper.id)}
              className="p-2 rounded-lg border bg-red-600 text-white hover:bg-red-700"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}

      {/* Comment Modal */}
      {selectedPaper && (
        <CommentModal
          paper={selectedPaper}
          onClose={() => setSelectedPaper(null)}
          onSave={addComment}
        />
      )}
    </div>
  );
};

export default PaperManagement;
