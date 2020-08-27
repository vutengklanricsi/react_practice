import React from 'react';
import Ninjas from './Ninjas'

function App() {
  return (
    <div className="App">
     <h1>My first React app</h1>
     <p>Welcome</p>
     <Ninjas name="Ryu" age="25" belt="black" />
    </div>
  );
}

export default App;

// Az App componens a root komponens a reactben. a Root komponens az anya komponens ami főkomponens 
// Ebbe az Root componensbe ágyazzuk be a többi komponenst 