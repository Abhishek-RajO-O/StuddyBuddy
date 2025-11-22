import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="px-4 py-3 shadow bg-white flex gap-4">
      <Link to="/">Feed</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      <Link to="/add">Add Resource</Link>
      <Link to="/reviews">Reviews</Link>
      <Link to="/settings">Settings</Link>
    </nav>
  );
}
