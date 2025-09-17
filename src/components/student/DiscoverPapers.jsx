import { Search } from "lucide-react";

const DiscoverPapers = () => {
  const dummyPapers = [
    { title: "AI in Healthcare", author: "Dr. Rahman", university: "DU", year: 2024 },
    { title: "Climate Change Research", author: "Dr. Sultana", university: "BUET", year: 2023 },
    { title: "Blockchain Security", author: "Dr. Hasan", university: "NSU", year: 2025 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Discover Research Papers</h1>

      {/* Search bar */}
      <div className="flex items-center bg-white p-3 rounded-xl shadow mb-6">
        <Search className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search by title, author, or field..."
          className="w-full outline-none"
        />
      </div>

      {/* Papers list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dummyPapers.map((paper, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{paper.title}</h2>
            <p className="text-gray-600">By {paper.author} ({paper.university})</p>
            <p className="text-sm text-gray-500 mt-2">Published: {paper.year}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              View Paper
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverPapers;
