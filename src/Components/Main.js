import Card from "./Card";
import { useEffect, useState } from "react";

function Main({ list, setList }) {
  const [randomArr, setRandomArr] = useState(list);
  const [random, setRandom] = useState(true);

  useEffect(() => {
    console.log("MAIN");
  }, [randomArr]);

  let i = 0;
  const cardContent = list.map((eachList, index) => {
    i++;
    return <Card key={index} eachList={eachList} order={i} />;
  });

  const shuffleArr = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const shuffleArrMore = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const handleRandom = () => {
    const randomize = shuffleArr(list);
    const randomizeAgain = shuffleArrMore(randomize);
    setList(randomizeAgain);
    setRandom(!random);
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

      <div className="column" style={mainStyle}>{random ? cardContent : cardContent}</div>
    </div>
  );
}

export default Main;
