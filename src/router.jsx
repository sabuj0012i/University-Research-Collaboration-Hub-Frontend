import { createBrowserRouter } from "react-router-dom";

// Auth pages
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

// Layouts
import StudentLayout from "./components/Layout/StudentLayout";
import ResearcherLayout from "./components/Layout/ResearcherLayout";
import UniversityAdminLayout from "./components/Layout/UniversityAdminLayout";

// Student panel pages
import Home from "./components/student/Home";
import Researchers from "./components/student/Researchers";
import ResearchPapers from "./components/student/ResearchPapers";
import Dashboard from "./components/student/Dashboard";
import DiscoverPapers from "./components/student/DiscoverPapers";
import SavedResources from "./components/student/SavedResources";
import Profile from "./components/student/Profile";
import ResearchComment from "./components/student/ResearchComment";

// Researcher panel pages
import ResearcherDashboard from "./components/researcher/ResearcherDashboard";
import ResearcherProfile from "./components/researcher/ResearcherProfile";
import ResearcherCollaborations from "./components/researcher/ResearcherCollaborations";
import ResearcherComments from "./components/researcher/ResearcherComments";
import ResearcherPublications from "./components/researcher/ResearcherPublications";
import UploadPaper from "./components/researcher/UploadPaper";
import MyUploads from "./components/researcher/MyUploads";

// UniversityAdmin panel pages
import DashboardStates from "./components/universityadmin/DashboardStates";
import ResearcherManagement from "./components/universityadmin/ResearcherManagement";
import CommentModal from "./components/universityadmin/CommentModal";
import PaperManagement from "./components/universityadmin/PaperManagement";
import SuperAdminLayout from "./components/Layout/SuperAdminLayout";
import SuperAdminDashboard from "./components/superadmin/SuperAdminDashboard";
import SuperAdminUsers from "./components/superadmin/SuperAdminUsers";

const router = createBrowserRouter([
  // Auth (no layout)
  
  { path: "/register", element: <Register /> },

  // Student panel
  {
    element: <StudentLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/papers", element: <ResearchPapers /> },
      { path: "/researchers", element: <Researchers /> },
      { path: "/student/dashboard", element: <Dashboard /> },
      { path: "/student/discover", element: <DiscoverPapers /> },
      { path: "/student/saved", element: <SavedResources /> },
      { path: "/student/comments", element: <ResearchComment /> },
      { path: "/student/profile", element: <Profile /> },
    ],
  },

  // Researcher panel
  {
    element: <ResearcherLayout />,
    children: [
      { path: "/researcher/", element: <Home /> },
      { path: "/researcher/researchers", element: <Researchers /> },
      { path: "/researcher/papers", element: <ResearchPapers /> },
      { path: "/researcher/dashboard", element: <ResearcherDashboard /> }, 
      { path: "/researcher/collaborations", element: <ResearcherCollaborations /> },
      { path: "/researcher/publications", element: <ResearcherPublications /> },
      { path: "/researcher/comments", element: <ResearcherComments /> },
      { path: "/researcher/upload-paper", element: <UploadPaper /> },
      { path: "/researcher/my-uploads", element: <MyUploads /> },
      { path: "/researcher/profile", element: <ResearcherProfile /> },
    ],
  },

  // University admin panel
  {
    element: <UniversityAdminLayout />,
    children: [
      { path: "/admin/", element: <Home /> },
      { path: "/admin/researchers", element: <Researchers /> },
      { path: "/admin/papers", element: <ResearchPapers /> },
      { path: "/admin/dashboard", element: <DashboardStates /> },
      { path: "/admin/researchermanagement", element: <ResearcherManagement /> },
      { path: "/admin/comments", element: <CommentModal /> },
      { path: "/admin/papermanagement", element: <PaperManagement /> },
    ],
  },
  {
    element: <SuperAdminLayout/>,
    children: [
      { path: "/superadmin/", element: <Home /> },
      { path: "/superadmin/researchers", element: <Researchers /> },
      { path: "/superadmin/papers", element: <ResearchPapers /> },
      { path: "/superadmin/dashboard", element: <SuperAdminDashboard /> },
      { path: "/superadmin/users", element: <SuperAdminUsers /> },
      { path: "/superadmin/papers", element: <SuperAdminUsers /> },
      
    ],
  },
]);

export default router;
