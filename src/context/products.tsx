import { createContext, useState, ReactNode, useEffect } from "react";
import { Producto, ProductoContextType } from "../types/interface";

export const ProductContext = createContext<ProductoContextType>({
  getProducts: [
    {
      categoria: "",
      descripcion: "",
      id: 1,
      imagen: "",
      nombre: "",
      precio: 1,
    },
  ],
});

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Producto[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/productos")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const contextValue: ProductoContextType = {
    getProducts: products,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
