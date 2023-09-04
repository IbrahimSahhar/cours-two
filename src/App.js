import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Food from "./pages/Food";
import { MealContext } from "./context/MealContext";
import { mealsData } from "./mock/mealsData";
import { Zoom } from "react-reveal";
function App() {
  const [meals, setMeals] = useState([
    ...mealsData.افطار,
    ...mealsData.غداء,
    ...mealsData.عشاء,
    ...mealsData.سناك,
  ]);

  return (
    <div>
      <MealContext.Provider value={{ meals, setMeals }}>
        <NavBar />
        <Zoom>
          <Food />
        </Zoom>
      </MealContext.Provider>
    </div>
  );
}

export default App;
