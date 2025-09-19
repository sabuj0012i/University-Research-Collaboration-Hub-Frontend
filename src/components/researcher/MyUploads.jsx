import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MyUploads = ({ researcherEmail = "rahman@du.ac.bd" }) => {
  const [papers, setPapers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        // Filter papers by the given researcher email (adjust logic as needed)
        const myPapers = (data.researchPapers || []).filter(
          paper =>
            paper.email === researcherEmail ||
            paper.author.toLowerCase().includes("rahman") // fallback for demo
        );
        setPapers(myPapers);
      });
  }, [researcherEmail]);

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
      {/* Upload Papers Button */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">My Uploaded Papers</h2>
        <button
          className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-medium"
          onClick={() => navigate("/researcher/upload-paper")}
        >
          <Plus className="w-5 h-5" />
          Upload Papers
        </button>
      </div>

      {/* Papers List */}
      {papers.length === 0 ? (
        <p className="text-gray-500">No papers uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {papers.map((paper) => (
            <div
              key={paper.id}
              className="border border-gray-200 rounded-xl shadow hover:shadow-lg transition bg-gradient-to-br from-gray-50 via-white to-blue-50 p-5 flex flex-col"
            >
              <h3 className="text-xl font-bold text-blue-700 mb-2">{paper.title}</h3>
              <p className="text-sm text-gray-700 mb-1">
                <span className="font-medium">{paper.author}</span> | {paper.university}
              </p>
              <span className="inline-block bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-xs font-semibold mb-2">
                Published: {paper.year}
              </span>
              {paper.abstract && (
                <p className="text-gray-600 text-sm mb-2">{paper.abstract}</p>
              )}
              {/* You can add Download/View buttons here if needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyUploads;