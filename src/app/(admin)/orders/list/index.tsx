import { useAdminOrderList } from "@/api/orders";
import { useInsertOrderSubscription } from "@/api/orders/subscriptions";
import OrderListItem from "@components/OrderListItem";
import { ActivityIndicator, FlatList, Text } from "react-native";

export default function OrderScreen() {
  const {
    data: orders,
    isLoading,
    error,
  } = useAdminOrderList({ archived: false });

  useInsertOrderSubscription();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <OrderListItem order={item} />}
      contentContainerStyle={{ gap: 10, padding: 10 }}
    />
  );
}
