import React from "react";
import "./App.css";
import ConcreteSelector from "./components/body/ConcreteSelector";
import TitleBar from "./components/titleBar/TitleBar";

const App: React.FC = () => {
  return (
    <div className="App">
      <TitleBar />
      <div className="dropdown-selector">
        <ConcreteSelector />
      </div>
    </div>
  );
};

export default App;
