import React from "react";

function App() {
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div>  
    Hi  hi</div>;
}

export default App;
