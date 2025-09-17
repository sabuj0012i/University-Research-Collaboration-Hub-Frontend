import React, { useEffect, useState } from "react";

const Researchers = () => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    fetch("/data.json") // public/data/data.json
      .then((res) => res.json())
      .then((data) => setUniversities(data.universities))
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Researchers Directory
      </h1>

      {universities.map((uni, idx) => (
        <div key={idx} className="mb-12">
          {/* University Name */}
          <h2 className="text-2xl font-semibold text-blue-700 mb-6 border-b pb-2">
            {uni.name}
          </h2>

          {/* Researchers List */}
          <div className="space-y-8">
            {uni.researchers.map((researcher) => (
              <div
                key={researcher.id}
                className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-gray-800">
                  {researcher.name}
                </h3>
                <p className="text-gray-600 italic mb-4">
                  {researcher.designation}
                </p>

                {/* Papers List */}
                <h4 className="text-lg font-semibold text-gray-700 mb-2">
                  Published Papers:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {researcher.papers.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Researchers;
