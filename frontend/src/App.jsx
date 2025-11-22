import { Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed.jsx";
import AddResource from "./pages/AddResource.jsx";
import Leaderboard from "./pages/Leaderboard.jsx";
import Reviews from "./pages/Reviews.jsx";
import Settings from "./pages/Settings.jsx";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/add" element={<AddResource />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}
