import Card from "./Card";
import { useEffect, useState } from "react";

function Main({ list, setList }) {
  const [randomArr, setRandomArr] = useState(list);
  const [random, setRandom] = useState(true);
  const [randomCount, setRandomCount] = useState(0);

  useEffect(() => {
    console.log("MAIN");
  }, [randomArr]);

  let i = 0;
  const cardContent = list.map((eachList, index) => {
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
    let shuffledList = shuffleArray([...list]);  // Clone list if you don't want to modify the original array
    shuffledList = shuffleArray(shuffledList);  // Shuffle again if needed
    setList(shuffledList);
    setRandom(!random);
    setRandomCount(prevCount => prevCount + 1);
  };

  const handleResetCounter = () => {
    setRandomCount(0)
  }

  const mainStyle = {
    display: "grid",
    width: "80%",
    gridTemplateColumns: "repeat(2, 1fr)",
  };

  const clearButtonStyle = {
    color: 'red',
    paddingLeft: '5px',
    cursor: 'pointer'
  }

  return (
    <div className="ui two column centered grid">
      <p>Created by: Vince Baylon</p>
      <br></br>
      <div className="row">
        <button className="massive ui red button" onClick={handleRandom}>
          RANDOMIZE
        </button>
      </div>
      <div className="row centered">
        <h4>Counter: {randomCount}</h4>
        <p style={clearButtonStyle} onClick={handleResetCounter}>Reset</p>
      </div>

      <div className="column" style={mainStyle}>{random ? cardContent : cardContent}</div>
    </div>
  );
}

export default Main;
