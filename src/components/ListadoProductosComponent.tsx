import ProductoComponent from "./ProductoComponent";
import { Producto } from "../types/interface";
import Filter from "./Filter";

export const ListadoProductosComponent = ({
  pociones,
}: {
  pociones: Producto[];
}) => {
  return (
    <div className="flex flex-col items-center">
      <div id="filter" className="w-full max-w-sm mb-4 bg-stone-700 rounded-xl shadow-lg px-4 py-2">
        <h2 className="text-white text-2xl font-bold mb-2 text-center">Listado de Productos</h2>
        <Filter />
      </div>
      <div
        id="productos"
        className="w-full max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4"
      >
        {pociones.map((pocion) => (
          <div key={pocion.id} className="w-full sm:w-1/2 md:w-5/6">
            <ProductoComponent pocion={pocion} />
          </div>
        ))}
      </div>
    </div>
  );
};
