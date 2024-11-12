import { useState } from "react";
import Button from "./components/Button";
  
  function App(){
    const [showContainer, setShowContainer] = useState(false);
    return (
      <div className="flex flex-col p-2 mt-12 gap-2">
          {showContainer && <div className="p-4 bg-green-200 text-green-800 border">Success!</div>}
          <div><span><Button onClick={() => setShowContainer(!showContainer)} buttonText="Click"></Button></span></div>
      </div>
    );
}

export default App