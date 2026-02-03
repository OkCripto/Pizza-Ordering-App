import { useProductList } from "@/api/products";
import ProductListItem from "@/components/ProductListItem";
import { FlashList } from "@shopify/flash-list";
import { Stack } from "expo-router";
import { ActivityIndicator, Text, View } from "react-native";

export default function MenuScreen() {
  const { data: products, error, isLoading } = useProductList();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 16, color: "red" }}>
          Error fetching products
        </Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#f8f9fa" }}>
      <Stack.Screen options={{ title: "Menu", headerTitleAlign: "center" }} />
      <FlashList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 8, paddingVertical: 10 }}
        estimatedItemSize={200}
      />
    </View>
  );
}
