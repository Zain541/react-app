import { useState } from "react";
import Button from "./components/Button";
import Users from "./components/users/Users";
  
  function App(){
    const [showContainer, setShowContainer] = useState(false);
    return (
      <div className="flex">
        <div className="w-1/2 justify-center align-center">
          <div className="flex flex-col p-2 mt-12 gap-2">
              {showContainer && <div className="p-4 bg-green-200 text-green-800 border">Success!</div>}
              <div><span><Button onClick={() => setShowContainer(!showContainer)} buttonText="Click"></Button></span></div>
          </div>
          <div className="mt-8 p-2">
            <Users></Users>
          </div>
        </div>
      </div>
    );
}

export default App