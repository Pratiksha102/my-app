import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router"; 
import { LinearGradient } from "expo-linear-gradient"; 

export default function Plan() {
  const router = useRouter();

  const plans = [
    {
      months: 3,
      title: "3-Month Plan",
      description:
        "A short-term plan to get started. Ideal for those who want to test the waters before making a long-term commitment.",
      price: "$29.99",
    },
    {
      months: 6,
      title: "6-Month Plan",
      description:
        "A great balance between affordability and commitment. Get consistent results with this mid-term plan.",
      price: "$49.99",
    },
    {
      months: 9,
      title: "9-Month Plan",
      description:
        "Best value for long-term users. Stay committed, save more, and enjoy exclusive benefits over time.",
      price: "$69.99",
    },
  ];

  return (
    <LinearGradient colors={["#1E3C72", "#2A5298"]} style={styles.gradientBackground}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>🚀 Choose Your Plan</Text>
          </View>

          {plans.map((plan) => (
            <View key={plan.months} style={styles.card}>
              <Text style={styles.planTitle}>{plan.title}</Text>
              <Text style={styles.planDescription}>{plan.description}</Text>
              <Text style={styles.price}>{plan.price}</Text>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  router.push({
                    pathname: "/plan/[months]",
                    params: { months: plan.months.toString() },
                  })
                }
              >
                <LinearGradient
                  colors={["#FF8C00", "#FF4500"]}
                  style={styles.buyButton}
                >
                  <Text style={styles.buyButtonText}>Buy Now</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 40,
  },
  scrollContainer: {
    paddingBottom: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  card: {
    backgroundColor: "#F9F9F9",
    padding: 20,
    marginVertical: 12,
    borderRadius: 15,
    width: "90%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  planTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2A5298",
    marginBottom: 8,
  },
  planDescription: {
    fontSize: 16,
    color: "#444",
    textAlign: "center",
    marginBottom: 12,
    lineHeight: 22,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#28a745",
    marginBottom: 15,
  },
  buyButton: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: "center",
  },
  buyButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
