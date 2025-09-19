import React, { useState } from "react";

const UploadPaper = () => {
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [author, setAuthor] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [success, setSuccess] = useState(false);

  // Convert file to Base64
  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!pdfFile) {
      alert("Please upload a PDF file!");
      return;
    }

    // Convert PDF to base64
    const pdfBase64 = await fileToBase64(pdfFile);

    const newPaper = {
      id: Date.now(),
      title,
      abstract,
      author,
      pdf: pdfBase64, // save pdf as base64 string
    };

    const existing = JSON.parse(localStorage.getItem("myUploads")) || [];
    existing.push(newPaper);

    localStorage.setItem("myUploads", JSON.stringify(existing));

    // Reset form fields
    setTitle("");
    setAbstract("");
    setAuthor("");
    setPdfFile(null);

    // Show success card
    setSuccess(true);

    // Hide success card after 3s
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Upload Research Paper</h2>

      {success && (
        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg shadow">
          ✅ Paper uploaded successfully!
        </div>
      )}

      <form onSubmit={handleUpload} className="space-y-4">
        {/* PDF Upload */}
        <div>
          <label className="block mb-1 font-medium">Upload Book (PDF)</label>
          <input
            type="file"
            accept="application/pdf"
            className="w-full border rounded-lg px-3 py-2"
            onChange={(e) => setPdfFile(e.target.files[0])}
            required
          />
        </div>

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
