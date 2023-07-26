import { createContext, useState, ReactNode } from "react";
import { CarritoContextType } from "../types/interface";
import { ProductoCarrito } from "../types/interface";

export const CarritoContext = createContext<CarritoContextType>({
  carrito: [{ id: 1, nombre: "", imagen: "", precio: 0 }],
  addToCarrito: () => {},
  deleteAll: () => {},
  showCart: false,
  setShowCart: () => {},
  setNewCart: () => {},
});

export const CarritoProvider = ({ children }: { children: ReactNode }) => {
  const [carrito, setCarrito] = useState<ProductoCarrito[]>([]);
  const [showCart, setShowCart] = useState(false);

  const addToCarrito = (producto: ProductoCarrito) => {
    setCarrito([...carrito, producto]);
  };
  const deleteAll = () => {
    setCarrito([]);
  };
  const setNewCart = (producto: ProductoCarrito[]) => {
    setCarrito(producto);
  };

  const contextValue: CarritoContextType = {
    carrito,
    addToCarrito,
    deleteAll,
    showCart,
    setShowCart,
    setNewCart,
  };

  return (
    <CarritoContext.Provider value={contextValue}>
      {children}
    </CarritoContext.Provider>
  );
};
