import React, { useState } from "react";

const ResearcherProfile = () => {
  const [profile, setProfile] = useState({
    name: "Dr. Rahman",
    designation: "Professor, Computer Science",
    university: "University of Dhaka",
    email: "rahman@du.ac.bd",
    bio: "Artificial Intelligence researcher with focus on ML & Data Science.",
    image: null,
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile({ ...profile, image: URL.createObjectURL(file) });
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">My Profile</h1>

      <div className="bg-white shadow-md rounded-2xl p-6 space-y-6">
        <div className="flex items-center space-x-6">
          <img
            src={profile.image || "/default-avatar.png"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover shadow"
          />
          <input type="file" onChange={handleImageUpload} className="mt-2" />
        </div>

        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          placeholder="Full Name"
        />

        <input
          type="text"
          name="designation"
          value={profile.designation}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          placeholder="Designation"
        />

        <input
          type="text"
          name="university"
          value={profile.university}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          placeholder="University"
        />

        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          placeholder="Email"
        />

        <textarea
          name="bio"
          value={profile.bio}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          rows="4"
          placeholder="Short Bio"
        />

        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default ResearcherProfile;
