import { useEffect, useState } from "react";

import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoadnig] = useState(true);
  const [haveError, setHaveError] = useState(); //undefined at begining
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-fb647-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      const responseData = await response.json();
      const loadedMeals = [];
      if (!response.ok) {
        throw new Error("Something went wrong!!!! :)");
      }
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoadnig(false);
    };
    //CANT CREATE TRY CATCH BLOCK INSIDE ASZNCH FUNCTION, INSTED OF THAT WE ADD A CATCH METHOD ON FUNCTION .catch()
    fetchMeals().catch((error) => {
      setIsLoadnig(false);
      setHaveError(error.message);
    });
  }, []);
  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }
  if (haveError) {
    return (
      <section className={classes.MealsLoading}>
        <p>{haveError}</p>
      </section>
    );
  }
  const mealslist = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealslist}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
