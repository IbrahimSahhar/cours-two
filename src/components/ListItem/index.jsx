import React, { useContext } from "react";
import { MealContext } from "../../context/MealContext";
import { mealsData } from "../../mock/mealsData";
import { items } from "../../mock/typeOfMeals";

const ListItem = () => {
  const meal = useContext(MealContext);
  const handelMealsType = (mealsType) => {
    meal.setMeals(
      mealsType === "الكل"
        ? [...mealsData.افطار, ...mealsData.غداء, ...mealsData.عشاء]
        : mealsData[mealsType]
    );
  };

  // const handelMealsType = (e, mealsType) => {
  //   e.preventDefault();
  //   meal.setMeals(mealsData[mealsType] ? mealsData[mealsType] : meal.meals);
  // };

  // const allCategory = ["الكل  ", ...new Set(items.map((item) => item.title))];
  // console.log(allCategory); // ['الكل','افطار','غداء','عشاء']

  return (
    <div className="d-flex justify-content-center my-5 ">
      {items.length > 0 ? (
        items.map((item, i) => {
          return (
            <button
              key={i}
              type="button"
              className="btn btn-outline-danger mx-2"
              id={item.title}
              onClick={(e) => handelMealsType(e.target.id)}
            >
              {item.title}
            </button>
          );
        })
      ) : (
        <div>لا يوجد تصنيفات</div>
      )}
    </div>
  );
};

export default ListItem;
