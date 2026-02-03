import { useProductList } from "@/api/products";
import ProductListItem from "@/components/ProductListItem";
import { FlashList } from "@shopify/flash-list";
import { ActivityIndicator, Text } from "react-native";

export default function MenuScreen() {
  const { data: products, error, isLoading } = useProductList();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error fetching products</Text>;
  }

  return (
    <FlashList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
      contentContainerStyle={{ padding: 10 }}
      estimatedItemSize={240}
    />
  );
}
