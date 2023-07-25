import { useContext } from "react";
import { CarritoContext } from "../context/carrito";

export const useCarrito = () => {
  const context = useContext(CarritoContext);

  if (context === undefined) {
    throw new Error("useCarrito debe ser usado dentro del carritoProvider");
  }

  return context;
};
