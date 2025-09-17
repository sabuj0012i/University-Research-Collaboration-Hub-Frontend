import React, { useEffect, useState } from "react";

const ResearcherPublications = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    fetch("/data/publications.json")
      .then((res) => res.json())
      .then((data) => setPublications(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">My Publications</h1>
      <div className="space-y-4">
        {publications.map((pub, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold">{pub.title}</h2>
            <p className="text-gray-600">{pub.journal} - {pub.year}</p>
            <a
              href={pub.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearcherPublications;
