import React, { useState } from "react";

const UploadPaper = () => {
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [author, setAuthor] = useState("");

  const handleUpload = (e) => {
    e.preventDefault();

    const newPaper = {
      id: Date.now(),
      title,
      abstract,
      author,
    };

    // পুরোনো আপলোড লোড করা
    const existing = JSON.parse(localStorage.getItem("myUploads")) || [];
    existing.push(newPaper);

    localStorage.setItem("myUploads", JSON.stringify(existing));

    // ফর্ম ক্লিয়ার করা
    setTitle("");
    setAbstract("");
    setAuthor("");

    alert("Paper uploaded successfully!");
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Upload Research Paper</h2>
      <form onSubmit={handleUpload} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Author</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Abstract</label>
          <textarea
            className="w-full border rounded-lg px-3 py-2"
            rows="4"
            value={abstract}
            onChange={(e) => setAbstract(e.target.value)}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadPaper;
