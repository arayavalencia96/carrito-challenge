import { Producto } from "../types/interface";

const ProductoComponent = ({ producto }: { producto: Producto }) => {
  return (
    <div className="max-w-sm bg-stone-700 rounded-xl overflow-hidden shadow-lg mb-5">
      <figure className="flex justify-center">
        <img
          className="w-1/2 h-48 object-cover rounded-lg"
          src={producto.imagen}
          alt="img"
        />
      </figure>
      <div className="px-6 py-4 flex justify-between mb-2">
        <div className="font-bold text-white text-xl mb-2">
          {producto.nombre}
        </div>
        <p className="px-1 font-bold text-white py-1 rounded-xl border border-gray-300 ml-1 bg-secondary-dark">
          {producto.precio} Gema
        </p>
      </div>
      <p className="text-white text-center">{producto.descripcion}</p>
      <div className="px-6 pt-4 pb-2">
        <input
          type="button"
          value="Agregar"
          className="w-full btn btn-lg cursor-pointer font-bold hover:bg-primary px-2 text-white py-1 rounded-lg border border-gray-300 mr-2 bg-primary-dark"
        />
      </div>
    </div>
  );
};

export default ProductoComponent;
