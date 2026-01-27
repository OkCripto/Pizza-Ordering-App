import appStyles from "@/components/appStyles";
import { defaultPizzaImage } from "@/components/ProductListItem";
import { useCart } from "@/providers/CartProvider";
import { PizzaSize } from "@/types";
import products from "@assets/data/products";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const { addItem } = useCart();

  const router = useRouter();

  const [selectedSize, setSelectedSize] = useState<PizzaSize>("M");

  const product = products.find((p) => p.id.toString() === id);

  const addToCart = () => {
    if (!product) {
      return;
    }
    addItem(product, selectedSize);
    router.push("/cart");
  };

  if (!product) {
    return <Text> Product Not Found</Text>;
  }

  return (
    <View>
      <Stack.Screen options={{ title: product.name }} />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={appStyles.image}
      />

      <Text style={productStyle.title}>{product.name}</Text>
      <Text style={productStyle.price}> $ {product.price}</Text>
    </View>
  );
};

export default ProductDetailsScreen;

const productStyle = StyleSheet.create({
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
