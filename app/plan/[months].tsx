import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function PlanDetail() {
  const { months } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plan Details</Text>
      <Text style={styles.planText}>You selected the {months}-month plan.</Text>
    </View>
  );
}

// Hide the header for this screen
export const navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9F9F9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  planText: {
    fontSize: 18,
    marginTop: 10,
  },
});
