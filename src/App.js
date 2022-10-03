import React, { useEffect } from "react";
import ButtonFilters from "./components/ButtonFilters";
import Jumbotron from "./components/Jumbotron";
import ListApi from "./components/ListApi";
import useAxios from "./hooks/useAxios";

function App() {

  const {fetchData, response ,loading}=useAxios("entries")

  useEffect(()=>{
    fetchData({params:{category:'Animals'}});
  },[fetchData])


  return (
    <div>
      <Jumbotron fetchData={fetchData}/>
      <div className="container mx-auto max-w-4xl">
        <ButtonFilters fetchData={fetchData}/>
        <ListApi response={response} loading={loading}/>
      </div>
    </div>
  );
}

export default App;
