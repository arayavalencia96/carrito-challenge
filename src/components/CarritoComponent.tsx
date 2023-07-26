import { useContext } from "react";
import { CarritoContext } from "../context/carrito";
import { useCarrito } from "../hooks/useCarrito";

export const CarritoComponent = () => {
  const { carrito, setNewCart } = useCarrito();
  const { showCart, setShowCart } = useContext(CarritoContext);

  const toggleShowCart = () => {
    setShowCart(!showCart);
  };
  const handleEliminarProducto = (id: number) => {
    const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
    setNewCart(nuevoCarrito);
  };

  return (
    <div className="w-1/2">
      <input
        type="button"
        value="Volver"
        onClick={toggleShowCart}
        className="btn btn-lg cursor-pointer font-bold hover:bg-primary px-2 text-white py-1 rounded-lg border border-gray-300 mr-2 bg-primary-dark"
      />
      <div>
        <ul className="divide-y divide-gray-300 bg-stone-700 px-2 my-3">
          {carrito.map((producto) => (
            <li key={producto.id} className="flex items-center py-2">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-12 h-12 object-cover rounded"
              />
              <span className="ml-6 flex justify-center text-lg font-semibold">
                {producto.nombre}
              </span>
              <button
                onClick={() => handleEliminarProducto(producto.id)}
                className="ml-auto text-gray-500 hover:text-red-500"
              >
                &#10005;
              </button>
            </li>
          ))}
        </ul>
      </div>
      <input
        type="button"
        value="Comprar"
        className="w-full btn btn-lg cursor-pointer font-bold hover:bg-primary px-2 text-white py-1 rounded-lg border border-gray-300 mr-2 bg-primary-dark"
      />
    </div>
  );
};
