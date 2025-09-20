import React, { useState } from "react";

const SuperAdminDashboard = () => {
  const [universities, setUniversities] = useState([]);
  const [newUniversity, setNewUniversity] = useState("");

  // Add University
  const addUniversity = () => {
    if (newUniversity.trim() !== "") {
      const newUni = {
        id: Date.now(),
        name: newUniversity,
        researchers: [],
      };
      setUniversities([...universities, newUni]);
      setNewUniversity("");
    }
  };

  // Add Researcher to University
  const addResearcher = (uniId, researcher) => {
    setUniversities(
      universities.map((uni) =>
        uni.id === uniId
          ? { ...uni, researchers: [...uni.researchers, researcher] }
          : uni
      )
    );
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Super Admin Dashboard</h1>
      <p className="mb-6 text-gray-600">
        Welcome Super Admin! Manage Universities and their Researchers.
      </p>

      {/* Add University */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-3">🏫 Add New University</h2>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="University Name"
            value={newUniversity}
            onChange={(e) => setNewUniversity(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addUniversity}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </div>

      {/* University List */}
      <div className="space-y-6">
        {universities.map((uni) => (
          <div
            key={uni.id}
            className="bg-white p-5 rounded-2xl shadow-lg space-y-4"
          >
            <h2 className="text-xl font-bold text-gray-800">{uni.name}</h2>

            {/* Add Researcher Form */}
            <ResearcherForm
              onAdd={(researcher) => addResearcher(uni.id, researcher)}
            />

            {/* Researcher List */}
            <div className="grid md:grid-cols-2 gap-4">
              {uni.researchers.length === 0 ? (
                <p className="text-gray-500">No researchers added yet.</p>
              ) : (
                uni.researchers.map((res) => (
                  <div
                    key={res.id}
                    className="bg-gray-50 p-4 rounded-lg border"
                  >
                    <h3 className="font-semibold text-gray-800">{res.name}</h3>
                    <p className="text-sm text-gray-600">{res.email}</p>
                    <p className="text-sm text-gray-700">{res.field}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const ResearcherForm = ({ onAdd }) => {
  const [form, setForm] = useState({ name: "", email: "", field: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (form.name && form.email) {
      onAdd({ ...form, id: Date.now() });
      setForm({ name: "", email: "", field: "" });
    }
  };

  return (
    <div className="space-y-3">
      <h3 className="font-medium">➕ Add Researcher</h3>
      <div className="grid md:grid-cols-3 gap-3">
        <input
          type="text"
          name="name"
          placeholder="Researcher Name"
          value={form.name}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2"
        />
        <input
          type="text"
          name="field"
          placeholder="Field of Research"
          value={form.field}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2"
        />
      </div>
      <button
        onClick={handleAdd}
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
      >
        Add Researcher
      </button>
    </div>
  );
};

export default SuperAdminDashboard;
