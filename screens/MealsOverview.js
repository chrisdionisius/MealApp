import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;
  // alternative
  // const route = useRoute();
  // route.params
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {catId}</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
