import { createContext, useState, ReactNode } from "react";
import { CarritoContextType } from "../types/interface";
import { ProductoCarrito } from "../types/interface";

export const CarritoContext = createContext<CarritoContextType>({
  carrito: [{ id: 1, nombre: "", imagen: "" }],
  addToCarrito: () => {},
  deleteAll: () => {},
});

export const CarritoProvider = ({ children }: { children: ReactNode }) => {
  const [carrito, setCarrito] = useState<ProductoCarrito[]>([]);

  const addToCarrito = (producto: ProductoCarrito) => {
    setCarrito([...carrito, producto]);
  };
  const deleteAll = () => {
    setCarrito([]);
  };

  const contextValue: CarritoContextType = {
    carrito,
    addToCarrito,
    deleteAll,
  };

  return (
    <CarritoContext.Provider value={contextValue}>
      {children}
    </CarritoContext.Provider>
  );
};
