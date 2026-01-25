import { Link } from "expo-router";
import { Image, Pressable, Text } from "react-native";
import { Product } from "../types";
import appStyles from "./appStyles";

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={appStyles.container}>
        <Image
          source={{ uri: product.image || defaultPizzaImage }}
          style={appStyles.image}
          resizeMode="contain"
        />
        <Text style={appStyles.title}>{product.name}</Text>
        <Text style={appStyles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;
