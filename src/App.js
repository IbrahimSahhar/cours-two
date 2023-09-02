import React, { useState } from "react";
import ContainerComponent from "./components/Container";
import DateCount from "./components/DateCount";
import DateList from "./components/DateList";
import DateButtons from "./components/DateButtons";
import { data } from "./mock/data";
function App() {
  const [dateData, setDateData] = useState(data);
  return (
    <div className="font color-body">
      <ContainerComponent styles="py-4">
        <DateCount dateData={dateData} />
        <DateList dateData={dateData} />
        <DateButtons setDateData={setDateData} />
      </ContainerComponent>
    </div>
  );
}

export default App;
