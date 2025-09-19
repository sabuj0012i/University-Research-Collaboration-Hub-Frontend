import React, { useState } from "react";

const ResearcherManagement = () => {
  // Initial researchers
  const initialResearchers = [
    {
      id: 1,
      name: "Dr. Arif Hossain",
      email: "arif.hossain@ruet.ac.bd",
      university: "Rajshahi University of Engineering & Technology",
      details: "Expert in Machine Learning and Data Science",
    },
    {
      id: 2,
      name: "Dr. Samira Rahman",
      email: "samira.rahman@ruet.ac.bd",
      university: "Rajshahi University of Engineering & Technology",
      details: "Specialist in Artificial Intelligence and Robotics",
    },
    {
      id: 3,
      name: "Dr. Tareq Ahmed",
      email: "tareq.ahmed@ruet.ac.bd",
      university: "Rajshahi University of Engineering & Technology",
      details: "Focuses on Computer Networks and Cybersecurity",
    },
  ];

  const [researchers, setResearchers] = useState(initialResearchers);
  const [form, setForm] = useState({ name: "", email: "", university: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addResearcher = () => {
    if (form.name && form.email && form.university) {
      const newResearcher = {
        id: Date.now(),
        name: form.name,
        email: form.email,
        university: form.university,
        details: "Newly added researcher",
      };
      setResearchers([...researchers, newResearcher]);
      setForm({ name: "", email: "", university: "" }); // reset form
    }
  };

  return (
    <div className="space-y-8">
      {/* Create Researcher Form */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          ➕ Create Researcher Profile
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Researcher Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
          <input
            type="text"
            name="university"
            placeholder="University"
            value={form.university}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <button
          onClick={addResearcher}
          className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Create Researcher
        </button>
      </div>

      {/* Researchers List */}
      <div>
        <h2 className="text-lg font-semibold mb-4">👩‍🔬 Researchers</h2>
        {researchers.length === 0 ? (
          <p className="text-gray-500">No researchers created yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {researchers.map((res) => (
              <div
                key={res.id}
                className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg text-gray-800">
                  {res.name}
                </h3>
                <p className="text-sm text-gray-600">{res.email}</p>
                <p className="text-sm text-gray-700">{res.university}</p>
                {res.details && (
                  <p className="text-xs text-gray-500 mt-2">{res.details}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResearcherManagement;
