import ProductoComponent from "./ProductoComponent";
import { Producto } from "../types/interface";
import Filter from "./Filter";

export const ListadoProductosComponent = ({
  productos,
}: {
  productos: Producto[];
}) => {
  return (
    <div>
      <h2>Listado de Productos</h2>
      <Filter />
      <div className="flex flex-wrap justify-between -mx-4">
        {productos.map((producto) => (
          <div key={producto.id} className="w-full sm:w-1/2 md:w-1/3 px-4">
            <ProductoComponent producto={producto} />
          </div>
        ))}
      </div>
    </div>
  );
};
