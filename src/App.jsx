import { useState } from "react";

function App() {
  const [person] = useState(null);

  return (
    <div className="App">
      <div>Case another bug (run-time error) {person.name}</div>
    </div>
  );
}

export default App;
