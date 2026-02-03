import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

const appStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 20,
    flex: 1,
    margin: 8, // Consistent spacing
    // Premium Design: Elevation & Soft Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginVertical: 4,
    color: "#1a1a1a",
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "800",
    fontSize: 15,
  },
});

export default appStyles;
