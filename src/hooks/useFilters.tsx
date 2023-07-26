import { useContext } from "react";
import { Producto } from "../types/interface";
import { FiltersContext } from "../context/filters";

export function useFilters() {
  const { filters, setFilter } = useContext(FiltersContext);

  const filterProducts = (productos: Producto[]) => {
    return productos.filter((producto) => {
      return (
        producto.precio >= filters.price &&
        (filters.category === "Todos" || producto.categoria === filters.category)
      );
    });
  };

  return { filters, filterProducts, setFilter };
}
