import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="px-4 py-3 bg-gray-900 text-gray-200 border-b border-gray-800">

      {/* Mobile horizontal scrolling */}
      <div className="flex gap-6 overflow-x-auto no-scrollbar">
        <Link className="whitespace-nowrap hover:text-blue-400" to="/">Feed</Link>
        <Link className="whitespace-nowrap hover:text-blue-400" to="/leaderboard">Leaderboard</Link>
        <Link className="whitespace-nowrap hover:text-blue-400" to="/add">Add Resource</Link>
        <Link className="whitespace-nowrap hover:text-blue-400" to="/reviews">Reviews</Link>
        <Link className="whitespace-nowrap hover:text-blue-400" to="/settings">Settings</Link>
      </div>

    </nav>
  );
}
