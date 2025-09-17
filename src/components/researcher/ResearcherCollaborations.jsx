import React, { useEffect, useState } from "react";

const ResearcherCollaborations = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/collaborations.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">My Collaborations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="font-semibold text-lg">{p.title}</h2>
            <p className="text-gray-600">{p.description}</p>
            <p className="text-sm text-gray-500">With: {p.partners.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearcherCollaborations;
