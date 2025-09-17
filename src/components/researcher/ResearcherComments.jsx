import React, { useEffect, useState } from "react";

const ResearcherComments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("/data/comments.json")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Student Comments</h1>
      <div className="space-y-4">
        {comments.map((c, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
          >
            <p className="text-gray-800">{c.comment}</p>
            <p className="text-sm text-gray-500 mt-1">— {c.student}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearcherComments;
