import React from "react";
import ButtonFilters from "./components/ButtonFilters";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <div>
      <Jumbotron/>
      <div className="container mx-auto max-w-4xl">
        <ButtonFilters/>
      </div>
    </div>
  );
}

export default App;
