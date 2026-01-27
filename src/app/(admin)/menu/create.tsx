import Button from "@/components/Button";
import { defaultPizzaImage } from "@/components/ProductListItem";
import Colors from "@/constants/Colors";
import * as ImagePicker from "expo-image-picker";
import { Stack } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

const CreateProductScreen = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [errors, setErrors] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const resetFields = () => {
    setName("");
    setPrice("");
  };

  const validateInput = () => {
    setErrors("");
    if (!name) {
      setErrors("Name is required");
      return false;
    }
    if (!price) {
      setErrors("Price is required");
      return false;
    }
    if (isNaN(parseFloat(price))) {
      setErrors("Price must be a number");
      return false;
    }
    return true;
  };

  const onCreate = () => {
    if (!validateInput()) return;

    console.warn("Create");

    resetFields();
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={style.container}>
      <Stack.Screen options={{ title: "Create Product" }} />

      <Image source={{ uri: image || defaultPizzaImage }} style={style.image} />
      <Text onPress={pickImage} style={style.textButton}>
        Select Image{" "}
      </Text>

      <Text style={style.label}>Name </Text>
      <TextInput
        placeholder="Margerita"
        style={style.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={style.label}>Price ($)</Text>
      <TextInput
        placeholder="$99.9"
        style={style.input}
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <Text style={{ color: "red" }}>{errors}</Text>
      <Button onPress={onCreate} text="Create" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },

  image: {
    width: "50%",
    aspectRatio: 1,
    alignSelf: "center",
  },

  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
    marginVertical: 10,
  },

  input: {
    borderColor: "white",
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
  },

  label: {
    color: "gray",
    fontSize: 16,
  },
});

export default CreateProductScreen;
