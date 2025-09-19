import React, { useEffect, useState } from "react";

// Helper for designation badge colors
const designationColors = {
  "Professor": "bg-purple-100 text-purple-700",
  "Associate Professor": "bg-blue-100 text-blue-700",
  "Assistant Professor": "bg-green-100 text-green-700",
  "Lecturer": "bg-yellow-100 text-yellow-700",
};

function getDesignationColor(designation) {
  if (designation.startsWith("Professor,")) return designationColors["Professor"];
  if (designation.startsWith("Associate Professor,")) return designationColors["Associate Professor"];
  if (designation.startsWith("Assistant Professor,")) return designationColors["Assistant Professor"];
  if (designation.startsWith("Lecturer,")) return designationColors["Lecturer"];
  return "bg-gray-100 text-gray-700";
}

const Researchers = () => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setUniversities(data.universities))
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-12">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl p-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
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
                  className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 hover:shadow-md transition"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-800">{researcher.name}</h3>
                    <span
                      className={
                        "inline-block px-4 py-1 rounded-full font-semibold text-sm mt-2 md:mt-0 " +
                        getDesignationColor(researcher.designation)
                      }
                    >
                      {researcher.designation}
                    </span>
                  </div>
                  {/* Papers List */}
                  <h4 className="text-md font-medium text-gray-700 mb-2 mt-4">
                    Published Papers:
                  </h4>
                  <ul className="flex flex-wrap gap-2">
                    {researcher.papers.map((paper, index) => (
                      <li
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200"
                      >
                        {paper}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Researchers;