import type { CartItemType } from "../../types";

import {
  CartItemContainer,
  CartItemContent,
  CartItemDetails,
  CartItemHeader,
  CartItemInfo,
  ItemImage,
  ProductName,
} from "./style";

import { Price } from "../CartList/CheckoutSummary/style";

import BorderButton from "../common/BorderButton";
import CheckBox from "../common/CheckBox";
import CartItemQuantity from "./CartItemQuantity";

import useDeleteCartItem from "../../hooks/useDeleteCartItem";
import useSelectCartItem from "../../hooks/useSelectCartItem";
import formatPriceToKoreanWon from "../../util/formatPriceToKoreanWon";

interface CartItemProps {
  cartItem: CartItemType;
}

export default function CartItem({ cartItem: { id, product } }: CartItemProps) {
  const { handleDelete } = useDeleteCartItem(id);
  const { isSelected, toggleSelected } = useSelectCartItem(id);

  return (
    <CartItemContainer key={id}>
      <CartItemHeader>
        <CheckBox
          isSelected={isSelected}
          toggleSelected={toggleSelected}
          id={`checkbox_${id}`}
        />
        <BorderButton className="deleteBtn" onClick={handleDelete} size="large">
          삭제
        </BorderButton>
      </CartItemHeader>

      <CartItemContent>
        <ItemImage src={product.imageUrl} />
        <CartItemDetails>
          <CartItemInfo>
            <ProductName>{product.name}</ProductName>
            <Price>{formatPriceToKoreanWon(product.price)}</Price>
          </CartItemInfo>
          <CartItemQuantity itemId={id} />
        </CartItemDetails>
      </CartItemContent>
    </CartItemContainer>
  );
}
