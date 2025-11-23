import { Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed.jsx";
import AddResource from "./pages/AddResource.jsx";
import Leaderboard from "./pages/Leaderboard.jsx";
import Reviews from "./pages/Reviews.jsx";
import Settings from "./pages/Settings.jsx";
import Navbar from "./components/Navbar.jsx";
import ResourceDetails from "./pages/ResourceDetails.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/add" element={<AddResource />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/resource/:id" element={<ResourceDetails />} />
        </Routes>
      </div>
    </div>
  );
}
