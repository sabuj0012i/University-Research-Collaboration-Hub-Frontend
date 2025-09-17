import React, { useEffect, useState } from "react";
import { Bookmark, Download } from "lucide-react";

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

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Research Papers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {papers.map((paper) => (
          <div
            key={paper.id}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border"
          >
            <h2 className="text-lg font-semibold text-blue-700 mb-2">
              {paper.title}
            </h2>
            <p className="text-gray-700 text-sm">
              <span className="font-medium">{paper.author}</span> <br />
              {paper.designation}, {paper.university}
            </p>
            <p className="text-gray-500 text-xs mt-1">Published: {paper.year}</p>

            {/* Actions */}
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => handleSave(paper)}
                className="flex items-center text-base text-gray-600 hover:text-blue-600 transition cursor-pointer"
              >
                <Bookmark className="w-7 h-7 mr-1" /> Save
              </button>
              <button
                onClick={() => handleDownload(paper.file)}
                className="flex items-center text-base text-gray-600 hover:text-green-600 transition cursor-pointer"
              >
                <Download className="w-7 h-7 mr-1" /> Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPapers;
