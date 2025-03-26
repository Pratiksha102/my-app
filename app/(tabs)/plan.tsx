import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from "react-native";

export default function Plan() {
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
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {Platform.OS === "android" && <View style={{ height: 30 }} />} {/* Extra padding only on Android */}
      <View><Text style={styles.title}>🚀 Choose Your Plan</Text></View>
      {plans.map((plan) => (
        <View key={plan.months} style={styles.card}>
          <Text style={styles.planTitle}>{plan.title}</Text>
          <Text style={styles.planDescription}>{plan.description}</Text>
          <Text style={styles.price}>{plan.price}</Text>
          <TouchableOpacity style={styles.buyButton} activeOpacity={0.8}>
            <Text style={styles.buyButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 20,
    color: "#1D1E20",
  },
  card: {
    backgroundColor: "#fff",
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
    fontSize: 20,
    fontWeight: "700",
    color: "#0056b3",
    marginBottom: 8,
  },
  planDescription: {
    fontSize: 16,
    color: "#555",
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
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    shadowColor: "#007bff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  buyButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
