import { useState, useEffect } from 'react'
import Main from './Main'
import Header from './Header'
import Options from './Options'

function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    console.log('MAIN')
}, [list])

  return (
    <div>
      <Header />
      <Options list={list} setList={setList} />
      <Main list={list} setList={setList} />
    </div>
  );
}

export default App;

