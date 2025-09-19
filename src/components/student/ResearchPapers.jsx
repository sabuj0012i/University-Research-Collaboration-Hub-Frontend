import React, { useEffect, useState } from "react";
import { Bookmark, Download, Eye } from "lucide-react";

const ResearchPapers = () => {
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setPapers(data.researchPapers || []));
  }, []);

  const handleSave = (paper) => {
    alert(`Saved: ${paper.title}`);
  };

  const handleDownload = (file) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop();
    link.click();
  };

  const handleView = (file) => {
    window.open(file, "_blank");
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-4xl text-blue-700 font-extrabold text-center mb-10 drop-shadow-lg tracking-tight">
        Research Papers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {papers.map((paper) => (
          <div
            key={paper.id}
            className="rounded-2xl shadow-md hover:shadow-xl transition border border-gray-200 bg-white flex flex-col"
          >
            {/* Header */}
            <div className="rounded-t-2xl px-6 py-4 bg-gradient-to-r from-blue-900 via-indigo-900 to-sky-800">
              <h2 className="text-xl font-bold text-white">{paper.title}</h2>
              <p className="text-indigo-200 text-xs mt-1">
                <span className="text-xl font-semibold">{paper.author}</span>
              </p>
            </div>

            {/* Paper Info */}
            <div className="flex-1 text-base px-6 py-4">
              <p className="text-gray-800 text-base  mb-2">
                {paper.designation}, {paper.university}
              </p>
              <span className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mb-4">
                Published: {paper.year}
              </span>
            </div>
            
            {/* Actions */}
            <div className="flex justify-around items-center px-6 py-4 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
              <button
                onClick={() => handleSave(paper)}
                className="flex items-center text-base cursor-pointer text-blue-700 hover:text-white hover:bg-sky-300 font-medium px-3 py-1 rounded-lg transition"
              >
                <Bookmark className="w-5 h-5 mr-1" /> Save
              </button>
              <button
                onClick={() => handleView(paper.file)}
                className="flex items-center text-base cursor-pointer text-indigo-700 hover:text-white hover:bg-indigo-600 font-medium px-3 py-1 rounded-lg transition"
              >
                <Eye className="w-5 h-5 mr-1" /> View
              </button>
              <button
                onClick={() => handleDownload(paper.file)}
                className="flex items-center text-base cursor-pointer text-green-700 hover:text-white hover:bg-green-600 font-medium px-3 py-1 rounded-lg transition"
              >
                <Download className="w-5 h-5 mr-1" /> Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPapers;