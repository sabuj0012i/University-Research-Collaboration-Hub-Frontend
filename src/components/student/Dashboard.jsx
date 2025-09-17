import { BookOpen, Users, Bookmark } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Discover Papers */}
        <div
          onClick={() => navigate("/student/discover")}
          className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
        >
          <BookOpen className="w-10 h-10 text-blue-600 mb-4" />
          <h2 className="text-lg font-semibold hover:underline hover:text-blue-600">
            Discover Papers
          </h2>
          <p className="text-gray-600 text-sm">
            Explore latest research across universities.
          </p>
        </div>

        {/* Saved Resources */}
        <div
          onClick={() => navigate("/student/saved")}
          className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
        >
          <Bookmark className="w-10 h-10 text-green-600 mb-4" />
          <h2 className="text-lg font-semibold hover:underline hover:text-blue-600">
            Saved Resources
          </h2>
          <p className="text-gray-600 text-sm">
            Quick access to your bookmarked papers.
          </p>
        </div>

        {/* Collaborations */}
        <div
          onClick={() => navigate("/collaborations")}
          className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
        >
          <Users className="w-10 h-10 text-purple-600 mb-4" />
          <h2 className="text-lg font-semibold hover:underline hover:text-blue-600">
            Collaborations
          </h2>
          <p className="text-gray-600 text-sm">
            Connect with researchers and peers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
