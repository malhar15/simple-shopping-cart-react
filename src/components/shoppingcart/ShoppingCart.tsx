import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/cartSlice";
import { RootState } from "../../redux/store";
import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const getTotal = () => {
    let total = 0;
    cartItems.forEach((cartItem) => {
      total += Math.round(cartItem.price * cartItem.quantity * 100) / 100;
    });
    return total;
  };

  const handleClearCart = (): void => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
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
        <div style={{ width: "100px" }}>{"Quantity"}</div>
        <div>{"Subtotal"}</div>
      </div>
      {cartItems.map((cartItem) => {
        const { id, name, price, quantity } = cartItem;

        return (
          <ShoppingCartItem
            key={id}
            id={id}
            name={name}
            price={price}
            quantity={quantity}
          />
        );
      })}
      <h3>{`Total: ${Math.round(getTotal() * 100) / 100}`}</h3>
      <button onClick={handleClearCart}>{"Clear cart"}</button>
    </div>
  );
};

export default ShoppingCart;
