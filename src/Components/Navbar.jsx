function Navbar() {
  const elements = ["Feeds", "LeaderBoard", "Add Resourses"];
  return (
    <>
      <nav className="flex flex-row justify-around p-3.5 shadow-2xl shadow-blue-300 z-10">
        <div>Logo</div>
        <div>
          <ul className="flex flex-row justify-around gap-10">
            {elements.map((element, index) => {
              return <li key={index} className="pt-1 pl-2.5 pb-1 pr-2.5 rounded-3xl hover:bg-blue-300">{element}</li>;
            })}
          </ul>
        </div>
        <div>User</div>
      </nav>
    </>
  );
}
export default Navbar;
