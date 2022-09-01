import { useState } from "react";
import Header from "./components/header/Header";
import WorkingSpace from "./components/workingSpace/WorkingSpace";
import GlobalContext from "./Context/GlobalContext";
import './App.css'

function App() {

  const [isBlocked, setBlocked] = useState(true)
  const block = () => setBlocked(!isBlocked)

  const value = {
    block,
    isBlocked
  }

  return (
    <div className="App">
      <GlobalContext.Provider value={value}>
        <Header></Header>
        <WorkingSpace></WorkingSpace>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
