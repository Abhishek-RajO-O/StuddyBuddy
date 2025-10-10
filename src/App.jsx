// import { useState } from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";

function App() {
  // const [count , setCount] = useState(0);

  return (
    <>
      <Navbar />
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
    </>
  );
}

export default App;
