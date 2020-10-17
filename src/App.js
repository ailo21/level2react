import React from 'react';
import Data from './data';
import PackList from './components/PackList'



function App() {
  return (
   <div className="container">
     <div className="packs-block">
     <h2>Ты сегодня покормил кота?</h2>
      <PackList packs={Data}/>
     </div>
     
   </div> 
  );
}

export default App;
