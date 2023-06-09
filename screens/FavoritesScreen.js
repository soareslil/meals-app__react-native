import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";

import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }
  return (
    <>
      <View style={styles.root}>
        <MealsList items={favoriteMeals} />
      </View>
    </>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  }
});
