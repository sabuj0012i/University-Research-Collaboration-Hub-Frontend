import { useState } from "react";

const AdminCreation = () => {
  const [varsityName, setVarsityName] = useState("");
  const [varsityDetails, setVarsityDetails] = useState("");
  const [admins, setAdmins] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!varsityName || !varsityDetails) {
      alert("Please fill all fields");
      return;
    }

    const newAdmin = {
      id: Date.now(),
      varsityName,
      varsityDetails,
    };

    setAdmins([...admins, newAdmin]);
    setVarsityName("");
    setVarsityDetails("");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Create University Admin</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1 font-medium">Varsity Name</label>
          <input
            type="text"
            value={varsityName}
            onChange={(e) => setVarsityName(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter varsity name"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Varsity Details</label>
          <textarea
            value={varsityDetails}
            onChange={(e) => setVarsityDetails(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter varsity details"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Create Admin
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Created Admins</h2>
        {admins.length === 0 ? (
          <p className="text-gray-500">No admins created yet.</p>
        ) : (
          <ul className="space-y-2">
            {admins.map((admin) => (
              <li
                key={admin.id}
                className="border p-3 rounded-lg shadow-sm bg-gray-50"
              >
                <p>
                  <span className="font-bold">Varsity:</span> {admin.varsityName}
                </p>
                <p>
                  <span className="font-bold">Details:</span> {admin.varsityDetails}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminCreation;
