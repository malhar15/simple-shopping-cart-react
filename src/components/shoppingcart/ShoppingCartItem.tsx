import React from "react";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../../redux/cartSlice";

type ShoppingCartItemType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const ShoppingCartItem: React.FC<ShoppingCartItemType> = ({
  id,
  name,
  price,
  quantity,
}) => {
  const dispatch = useDispatch();

  const handleDecreaseQuantity = (): void => {
    dispatch(decreaseQuantity(id));
  };

  const handleIncreaseQuantity = (): void => {
    dispatch(increaseQuantity(id));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        gap: "8px",
        alignItems: "center",
        marginBottom: "4px",
      }}
    >
      <div style={{ width: "100px" }}>{name}</div>
      <div style={{ width: "100px" }}>{price}</div>
      <div style={{ width: "100px" }}>
        <button onClick={handleDecreaseQuantity} style={{ marginRight: "4px" }}>
          {"-"}
        </button>
        {quantity}
        <button onClick={handleIncreaseQuantity} style={{ marginLeft: "4px" }}>
          {"+"}
        </button>
      </div>
      <div>{Math.round(price * quantity * 100) / 100}</div>
    </div>
  );
};

export default ShoppingCartItem;
