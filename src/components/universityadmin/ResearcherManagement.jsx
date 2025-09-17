import React, { useState } from "react";

const ResearcherManagement = () => {
  const [researchers, setResearchers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", university: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addResearcher = () => {
    if (form.name && form.email) {
      setResearchers([...researchers, { ...form, id: Date.now() }]);
      setForm({ name: "", email: "", university: "" });
    }
  };

  return (
    <div className="space-y-8">
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
                <h3 className="font-semibold text-lg text-gray-800">{res.name}</h3>
                <p className="text-sm text-gray-600">{res.email}</p>
                <p className="text-sm text-gray-700">{res.university}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResearcherManagement;
