import React from "react";
import Routers from "./Routers";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <React.Fragment>
        <Routers />
      </React.Fragment>
    </AuthContextProvider>
  );
}

export default App;
