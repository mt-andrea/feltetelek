import React from "react";
import Login from "./Login";

let bejelentkezve=false
let regisztralva=false

function App() {
  return (
    <div className="container">
      {bejelentkezve ? <h1>Hello</h1> : <Login reg={regisztralva} />}
      
    </div>
  );
}

export default App;
