import React from "react";
import { useSelector } from "react-redux";
import { items } from "../../items";
import { RootState } from "../../redux/store";
import ShelfItem from "./ShelfItem";

const Shelf: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart);

  const isAlreadyAdded = (id: number): boolean => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <div>
      <h2>Shelf</h2>
      <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        gap: "8px",
        alignItems: "center",
        marginBottom: "4px",
      }}
    >
      <div style={{ width: "100px" }}>{"Item"}</div>
      <div style={{ width: "100px" }}>{"Price per unit"}</div>
    </div>
      {items.map((item) => {
        const { id, name, price } = item;

        return (
          <ShelfItem
            key={id}
            id={id}
            name={name}
            price={price}
            alreadyAdded={isAlreadyAdded(id)}
          />
        );
      })}
    </div>
  );
};

export default Shelf;
