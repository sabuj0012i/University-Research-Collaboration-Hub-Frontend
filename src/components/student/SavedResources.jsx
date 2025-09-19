import React, { useEffect, useState } from "react";

const SavedResources = () => {
  // Dummy Data
  const dummy = [
    { id: "d1", title: "Machine Learning Basics", author: "Prof. Karim" },
    { id: "d2", title: "Quantum Computing Future", author: "Dr. Ahsan" },
  ];

  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const localSaved = JSON.parse(localStorage.getItem("savedResources")) || [];
    setSaved([...dummy, ...localSaved]);
  }, []);

  // Remove Handler
  const handleRemove = (id) => {
    const updated = saved.filter((item) => item.id !== id);
    setSaved(updated);

    // localStorage থেকেও remove
    const localSaved = JSON.parse(localStorage.getItem("savedResources")) || [];
    const newLocal = localSaved.filter((item) => item.id !== id);
    localStorage.setItem("savedResources", JSON.stringify(newLocal));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Saved Resources</h1>
      {saved.length === 0 ? (
        <p className="text-gray-600">You have no saved papers yet.</p>
      ) : (
        <div className="space-y-4">
          {saved.map((item) => (
            <div
              key={item.id}
              className="bg-white p-5 rounded-xl shadow flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600 text-sm">By {item.author}</p>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedResources;
