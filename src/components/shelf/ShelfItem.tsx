import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice";

type ShelfItemType = {
  id: number;
  name: string;
  price: number;
  alreadyAdded: boolean;
};

const ShelfItem: React.FC<ShelfItemType> = ({
  id,
  name,
  price,
  alreadyAdded,
}) => {
  const dispatch = useDispatch();

  const handleClick = (): void => {
    if (alreadyAdded) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(addToCart({ id, name, price }));
    }
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
      <button onClick={handleClick}>
        {alreadyAdded ? "Remove from cart" : "Add to cart"}
      </button>
    </div>
  );
};

export default ShelfItem;
