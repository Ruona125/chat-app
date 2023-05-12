import React, {useState} from "react";
import "./App.css"
function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (

    <div className="App">
    {!loggedIn ? (
        <div className="logIn">
          <div className="inputs">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Room" />
          </div>
          <button>Enter chat</button>
        </div>
    ): (
        <h1>You are logged in</h1>
    )}
    </div>
  );
}

export default App;
