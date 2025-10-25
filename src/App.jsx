import { useState } from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import LeaderboardCard from "./Components/LeaderboardCard";

function App() {
  const [activePage, setActivePage] = useState("Feed");

  return (
    <>
      <Navbar onSelectPage={setActivePage} />

      {/* ---------------- FEED SECTION ---------------- */}
      {activePage === "Feed" && (
        <div className="p-6">
          <Card
            title={"Web Dev by Harkirat Singh"} //string
            discription={"MERN Stack complete course with projects"} //string
            catogory={"📚 Full Stack Development"} //string
            author={"by Sneha Sharma (IT)"} //string
            rating={"4.8 (4 ratings)"} //string
            stars={5} //int
            link={"https://harkirat.classx.co.in/"} //string
            reviewCount={38} //int
            comment={'"Industry ready content"'} //string
            comentBy={"- Karan"} //string
          />
        </div>
      )}

      {/* ---------------- LEADERBOARD SECTION ---------------- */}
      {activePage === "Leaderboard" && (
        <div
          style={{
            maxWidth: "800px",
            margin: "40px auto",
            backgroundColor: "#F6F7FB",
            borderRadius: "12px",
            padding: "24px",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "24px" }}>
            🏆 Top Learning Resources
          </h2>

          <LeaderboardCard
            rank={1}
            title={"Love Babbar DSA Playlist"}
            category={"Data Structures & Algorithms"}
            rating={"4.7 (7)"}
            helpful={42}
            author={"Rahul Kumar"}
            link={
              "https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA"
            }
          />

          <LeaderboardCard
            rank={2}
            title={"Web Dev by Harkirat Singh"}
            category={"Full Stack Development"}
            rating={"4.8 (4)"}
            helpful={38}
            author={"Sneha Sharma"}
            link={"https://harkirat.classx.co.in/"}
          />

          <LeaderboardCard
            rank={3}
            title={"Striver A2Z DSA Sheet"}
            category={"Data Structures & Algorithms"}
            rating={"4.8 (5)"}
            helpful={35}
            author={"Arjun Reddy"}
            link={
              "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/"
            }
          />
        </div>
      )}
    </>
  );
}

export default App;
