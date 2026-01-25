import appStyles from "@/components/appStyles";
import Button from "@/components/button";
import { defaultPizzaImage } from "@/components/ProductListItem";
import products from "@assets/data/products";
import { Stack, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const sizes = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const [selectedSize, setSelectedSize] = useState("M");

  const product = products.find((p) => p.id.toString() === id);

  const addToCart = () => {
    console.warn("Adding to Cart, size: ", selectedSize);
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

      <Text>Select Size</Text>
      <View style={productStyle.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => {
              setSelectedSize(size);
            }}
            key={size}
            style={[
              productStyle.size,
              {
                backgroundColor: selectedSize === size ? "gainsboro" : "white",
              },
            ]}
          >
            <Text
              style={[
                productStyle.sizeText,
                {
                  color: selectedSize === size ? "black" : "gray",
                },
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={productStyle.price}> $ {product.price}</Text>

      <Button onPress={addToCart} text="Add to Cart" />
    </View>
  );
};

export default ProductDetailsScreen;

const productStyle = StyleSheet.create({
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: "auto",
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    backgroundColor: "gainsboro",
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
  },
});
