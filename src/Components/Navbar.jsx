function Navbar({ onSelectPage }) {
  const elements = ["Feed", "Leaderboard", "Add Resource"];

  return (
    <>
      <nav className="flex flex-row justify-evenly p-3.5 shadow-2xl shadow-blue-300 z-10 bg-white">
        <div className="font-bold text-lg text-blue-600">StudyBuddy</div>

        <ul className="flex flex-row justify-around gap-6">
          {elements.map((element, index) => (
            <li
              key={index}
              className="pt-1 pl-2.5 pb-1 pr-2.5 rounded-3xl hover:bg-blue-300 cursor-pointer transition-all duration-200"
              onClick={() => onSelectPage(element)}
            >
              {element}
            </li>
          ))}
        </ul>

        <div className="font-medium">User</div>
      </nav>
    </>
  );
}

export default Navbar;
