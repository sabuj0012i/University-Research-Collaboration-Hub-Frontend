import React, { useEffect, useState } from "react";

const ResearchComment = () => {
  const [papers, setPapers] = useState([]);
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState({});

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setPapers(data.researchPapers));
  }, []);

  const handleCommentSubmit = (paperId) => {
    if (!comment.trim()) return;

    setComments((prev) => ({
      ...prev,
      [paperId]: [...(prev[paperId] || []), comment],
    }));

    setComment("");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Research Papers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {papers.map((paper) => (
          <div
            key={paper.id}
            className="p-4 bg-white shadow rounded-lg cursor-pointer hover:bg-gray-50"
            onClick={() => setSelectedPaper(paper)}
          >
            <h3 className="text-lg font-semibold">{paper.title}</h3>
            <p className="text-sm text-gray-600">{paper.author}</p>
          </div>
        ))}
      </div>

      {selectedPaper && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-xl font-bold mb-2">{selectedPaper.title}</h3>
          <p className="mb-4">{selectedPaper.abstract}</p>

          <h4 className="text-lg font-semibold mb-2">Comments</h4>
          <div className="space-y-2 mb-4">
            {(comments[selectedPaper.id] || []).map((c, idx) => (
              <div key={idx} className="p-2 bg-white rounded shadow">
                {c}
              </div>
            ))}
          </div>

          <textarea
            className="w-full border p-2 rounded mb-2"
            rows="3"
            placeholder="Write your comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => handleCommentSubmit(selectedPaper.id)}
          >
            Submit Comment
          </button>
        </div>
      )}
    </div>
  );
};

export default ResearchComment;
