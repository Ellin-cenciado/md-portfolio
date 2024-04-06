import { useContext, useState, useEffect } from "react";
import { NavBarContext } from "../context/NavBarContext";
import ExampleCard from "./ExampleCard";


function Examples() {
  //Placeholder for data till the async function finishes
  const [data, setData] = useState([]);
  const examplesClassName = useContext(NavBarContext).examplesClassName;

  useEffect(() => {
    async function fetchData() {
      try {
        //This is going to have repercussions..
        const res = await fetch("https://api.github.com/users/ellin-cenciado/repos");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);



  return (
    <div className={"flex flex-col relative items-center " + examplesClassName}>
      <h1 className="font-bold text-5xl text-forest-200 m-10">Examples</h1>
      <div className="example-card-wrapper grid relative h-[80vh] w-[80vw] grid-cols-2 overflow-y-auto">
        {data.map((example, index) => (
          <ExampleCard
            key={index}
            cardTitle={example.name}
            cardDescription={example.description}
            handleClick = {example.html_url}
          />
        ))}
      </div>
    </div>
  );
}

export default Examples;
