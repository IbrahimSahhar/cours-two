import React from "react";
import Meal from "../Meal";
import { useContext } from "react";
import { MealContext } from "../../context/MealContext";

const MealList = () => {
  const meal = useContext(MealContext);
  return (
    <div>
      {meal.meals?.length > 0 ? (
        meal.meals?.map((meal) => {
          return (
            <Meal
              key={meal.id}
              title={meal.title}
              description={meal.description}
              price={meal.price}
              src={meal.src}
            />
          );
        })
      ) : (
        <div>لا يوجد وجبات</div>
      )}
    </div>
  );
};

export default MealList;
