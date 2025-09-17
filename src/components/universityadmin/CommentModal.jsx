import React, { useState } from "react";

const CommentModal = ({ paper, onClose, onSave }) => {
  const [comment, setComment] = useState("");

  const handleSave = () => {
    if (comment.trim()) {
      onSave(paper.id, comment);
      setComment("");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-[400px] p-6 space-y-4">
        {/* Header */}
        <h3 className="font-semibold text-lg">
          💬 Comment on: <span className="text-blue-600">{paper.title}</span>
        </h3>

        {/* Input */}
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment..."
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Buttons */}
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
