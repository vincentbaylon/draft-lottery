import Card from "./Card";
import { useEffect, useState } from "react";

function Main({ list }) {
  const [randomArr, setRandomArr] = useState(list);

  useEffect(() => {
    console.log("MAIN");
  }, [randomArr]);

  let i = 0;
  const cardContent = randomArr.map((eachList, index) => {
    i++;
    return <Card key={index} eachList={eachList} order={i} />;
  });

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];  // Swap elements using destructuring
    }
    return array;
  };

  const handleRandom = () => {
    let shuffledList = shuffleArray([...randomArr]);  // Clone randomArr to avoid mutating the original array
    setRandomArr(shuffledList);
  };

  const mainStyle = {
    display: "grid",
    width: "80%",
    gridTemplateColumns: "repeat(2, 1fr)",
  };

  return (
    <div className="ui two column centered grid">
      <p>Created by: Vince Baylon</p>
      <br></br>
      <div className="row">
        <button className="massive ui red button" onClick={handleRandom}>
          RANDOMIZE
        </button>
      </div>

      <div className="column" style={mainStyle}>
        {cardContent}
      </div>
    </div>
  );
}

export default Main;
