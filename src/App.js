import React from "react";
import Hello from "./Components/Hello";
import Counter from "./Components/Counter";


const App = () =>{

  return(
    <div>
      <Hello>
        <p>I am Jadu </p>
        <button>Click Me</button>
      </Hello>
      <Hello>
        <p>I am a upcomming Software Engineer </p>
        <button>Click Me</button>
      </Hello>
      <Hello>
          <Counter/>
      </Hello>
      
    </div>
  )
}

export default App;