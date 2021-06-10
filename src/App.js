import React, { useState, useEffect } from "react";


const App = () => {

  const [apiData, setApiData] = useState([]);
  //const [market, setMarket] = useState("Bangalore");

  useEffect(() => {
    fetch("https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=<apikey>&format=json&offset=0&limit=100")
    .then( response => response.json() )
    .then( res => setApiData(res.records) )
  }, [])

  /**
   * apiData fetching 100 records but we are filtering using array reduce / array filter + map.
   */

  const marketData = record =>
    record.reduce((acc, item, index) => {
      if( item.market.includes("Bangalore") ){
        acc.push(
        <li className="p-4 border border-indigo-600" key={index}>
          <span className="block text-3xl">{item.commodity}</span>
          <span className="block text-2xl">{item.market}</span>
          <span className="block text-2xl">{item.district}</span>
        </li>);
      }
      return acc;
  }, []);

  return(
    <div className="container p-4">
      <h1 className="text-center text-5xl font-bold p-4 mb-5 tracking-wide">
        Market Daily Updates
      </h1>
      {/*}
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {apiData

      .filter(item => item.market.includes("Bangalore"))
      
      .map((item, index) => (
        <li className="p-4 border border-indigo-600" key={index}>
          <span className="block text-3xl">{item.commodity}</span>
          <span className="block text-2xl">{item.market}</span>
          <span className="block text-2xl">{item.district}</span>
        </li>
      ))}
      </ul>
      {*/}
    
      {
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {marketData(apiData)}
      </ul>
      }
    </div>
  )
}

export default App;
