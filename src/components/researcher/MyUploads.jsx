import React, { useEffect, useState } from "react";

const MyUploads = () => {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("myUploads")) || [];
    setUploads(stored);
  }, []);

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">My Uploaded Papers</h2>
      {uploads.length === 0 ? (
        <p className="text-gray-500">No papers uploaded yet.</p>
      ) : (
        <ul className="space-y-4">
          {uploads.map((paper) => (
            <li key={paper.id} className="border rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-semibold">{paper.title}</h3>
              <p className="text-sm text-gray-600">By {paper.author}</p>
              <p className="mt-2 text-gray-700">{paper.abstract}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyUploads;
