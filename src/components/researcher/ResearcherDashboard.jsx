import React from "react";
import { Users, BookOpen, MessageSquare } from "lucide-react";

const ResearcherDashboard = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
        <div className="flex items-center gap-4">
          <Users className="w-10 h-10 text-blue-500" />
          <div>
            <h2 className="text-xl font-semibold">Collaborations</h2>
            <p className="text-gray-500">12 Active</p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
        <div className="flex items-center gap-4">
          <BookOpen className="w-10 h-10 text-green-500" />
          <div>
            <h2 className="text-xl font-semibold">Publications</h2>
            <p className="text-gray-500">45 Papers</p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
        <div className="flex items-center gap-4">
          <MessageSquare className="w-10 h-10 text-purple-500" />
          <div>
            <h2 className="text-xl font-semibold">Comments</h2>
            <p className="text-gray-500">5 New</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearcherDashboard;
