import { useContext } from "react";
import { Producto } from "../types/interface";
import { FilterContext } from "../context/filters";

export function useFilters() {
  const {filters, setFilter} = useContext(FilterContext);

  const filterProducts = (productos: Producto[]) => {
    return productos.filter((producto) => {
      return (
        producto.precio >= filters.price &&
        (filters.category === "all" ||
          producto.categoria === filters.category)
      );
    });
  };

  return { filters, filterProducts, setFilter };
}
