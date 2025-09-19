import React, { useState, useRef } from "react";

const ResearcherProfile = () => {
  const [profile, setProfile] = useState({
    name: "Dr. Rahman",
    designation: "Professor, Computer Science",
    university: "University of Dhaka",
    email: "rahman@du.ac.bd",
    bio: "Artificial Intelligence researcher with focus on ML & Data Science.",
    image: null,
  });
  const [editMode, setEditMode] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile({ ...profile, image: URL.createObjectURL(file) });
    }
  };

  const handleEditOrSave = (e) => {
    e.preventDefault();
    setEditMode(!editMode);
    // Optionally: Save profile to backend here if editMode is true (saving)
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">My Profile</h1>
      <form className="bg-white shadow-md rounded-2xl p-6 space-y-6" onSubmit={handleEditOrSave}>
        <div className="flex items-center space-x-6">
          <img
            src={profile.image || "/default-avatar.png"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover shadow"
          />
          {/* Upload Photo button */}
          <button
            type="button"
            className={`px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition ${!editMode && "opacity-60 cursor-not-allowed"}`}
            onClick={() => editMode && fileInputRef.current.click()}
            disabled={!editMode}
          >
            Upload Photo
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageUpload}
            disabled={!editMode}
            accept="image/*"
          />
        </div>

        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          className={`w-full p-3 border rounded-lg ${!editMode ? "bg-gray-100" : ""}`}
          placeholder="Full Name"
          readOnly={!editMode}
        />

        <input
          type="text"
          name="designation"
          value={profile.designation}
          onChange={handleChange}
          className={`w-full p-3 border rounded-lg ${!editMode ? "bg-gray-100" : ""}`}
          placeholder="Designation"
          readOnly={!editMode}
        />

        <input
          type="text"
          name="university"
          value={profile.university}
          onChange={handleChange}
          className={`w-full p-3 border rounded-lg ${!editMode ? "bg-gray-100" : ""}`}
          placeholder="University"
          readOnly={!editMode}
        />

        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          className={`w-full p-3 border rounded-lg ${!editMode ? "bg-gray-100" : ""}`}
          placeholder="Email"
          readOnly={!editMode}
        />

        <textarea
          name="bio"
          value={profile.bio}
          onChange={handleChange}
          className={`w-full p-3 border rounded-lg ${!editMode ? "bg-gray-100" : ""}`}
          rows="4"
          placeholder="Short Bio"
          readOnly={!editMode}
        />

        <button
          type={editMode ? "submit" : "button"}
          className={`px-6 py-3 ${editMode ? "bg-green-600 hover:bg-green-700 cursor-pointer" : "bg-blue-600 hover:bg-blue-700"} text-white rounded-lg shadow transition cursor-pointer`}
          onClick={!editMode ? handleEditOrSave : undefined}
        >
          {editMode ? "Save Profile" : "Edit"}
        </button>
      </form>
    </div>
  );
};

export default ResearcherProfile;