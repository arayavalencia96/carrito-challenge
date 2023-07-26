import { useContext } from "react";
import { useCarrito } from "../hooks/useCarrito";
import { Producto } from "../types/interface";
import { GemasContext } from "../context/gemas";

const ProductoComponent = ({ pocion }: { pocion: Producto }) => {
  const { carrito, addToCarrito } = useCarrito();
  const { subtractGem } = useContext(GemasContext);

  const handleAddToCart = (producto: Producto) => {
    const priceProduct = pocion.precio;
    addToCarrito(pocion);
    subtractGem(priceProduct);
  };

  const lookUpId = (product: Producto) => {
    return carrito.includes(pocion);
  };

  const finishedGems = () => {
    const totalGemsInCart = carrito.reduce((total, prod) => {
      return total + prod.precio;
    }, 0);

    return totalGemsInCart >= 3;
  };

  return (
    <div className="max-w-sm bg-stone-700 rounded-xl overflow-hidden shadow-lg mb-5">
      <figure className="flex justify-center">
        <img
          className="w-1/2 h-48 object-cover rounded-lg"
          src={pocion.imagen}
          alt="img"
        />
      </figure>
      <div className="px-6 py-4 flex justify-between mb-2">
        <div className="font-bold text-white text-xl mb-2">{pocion.nombre}</div>
        <p className="px-1 font-bold text-white py-1 rounded-xl border border-gray-300 ml-1 bg-secondary-dark">
          {pocion.precio} Gema
        </p>
      </div>
      <p className="text-white text-center">{pocion.descripcion}</p>
      <div className="px-6 pt-4 pb-2">
        <input
          id={pocion.nombre}
          disabled={lookUpId(pocion) || finishedGems()}
          type="button"
          value="Agregar"
          onClick={() => handleAddToCart(pocion)}
          className={`w-full btn btn-lg font-bold px-2 text-white py-1 rounded-lg border border-gray-300 mr-2 ${
            lookUpId(pocion) || finishedGems()
              ? "bg-stone-500"
              : "bg-primary-dark hover:bg-primary cursor-pointer"
          }`}
        />
      </div>
    </div>
  );
};

export default ProductoComponent;
