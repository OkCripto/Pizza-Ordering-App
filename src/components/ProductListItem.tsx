import { Link, useSegments } from "expo-router";
import { memo } from "react";
import { Pressable, Text } from "react-native";
import { Tables } from "../types";
import appStyles from "./appStyles";
import RemoteImage from "./RemoteImage";

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

type ProductListItemProps = {
  product: Tables<"products">;
};

const ProductListItem = memo(({ product }: ProductListItemProps) => {
  const segments = useSegments();

  return (
    <Link href={`/${segments[0]}/menu/${product.id}`} asChild>
      <Pressable style={appStyles.container}>
        <RemoteImage
          path={product.image}
          fallback={defaultPizzaImage}
          style={appStyles.image}
          resizeMode="contain"
        />
        <Text style={appStyles.title}>{product.name}</Text>
        <Text style={appStyles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
});

export default ProductListItem;
