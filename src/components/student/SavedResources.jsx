const SavedResources = () => {
  const saved = [
    { title: "Machine Learning Basics", author: "Prof. Karim" },
    { title: "Quantum Computing Future", author: "Dr. Ahsan" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Saved Resources</h1>
      {saved.length === 0 ? (
        <p className="text-gray-600">You have no saved papers yet.</p>
      ) : (
        <div className="space-y-4">
          {saved.map((item, index) => (
            <div key={index} className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600 text-sm">By {item.author}</p>
              </div>
              <button className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
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
