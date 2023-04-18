import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

function FavoriteScreen() {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  console.log(favoriteMealIds);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );
  console.log(favoriteMeals);
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
  // return <Text>aaa</Text>;
}

const styles = StyleSheet.create({});

export default FavoriteScreen;
