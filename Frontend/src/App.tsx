import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
// import { Heatmap } from './Components/Heatmap';
// import { data } from "./Static/data";


function App() {
  return (
    <div className="App">
     {/* <Heatmap width={600} height={400} data={data}/> */}
     <Dashboard/>
    </div>
  );
}

export default App;
