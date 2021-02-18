import React from "react";
import { useRoutes } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ContextProvider } from "./context";

function App() {
  const routes = useRoutes();

  return (
    <ContextProvider>
      <Router>
        <Navbar />
        <div className="App">{routes}</div>
      </Router>
    </ContextProvider>
  );
}

export default App;
