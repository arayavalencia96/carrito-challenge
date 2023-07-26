import { useContext, useEffect, useState } from "react";
import { CarritoContext } from "../context/carrito";
import { useCarrito } from "../hooks/useCarrito";
import { GemasContext } from "../context/gemas";
import { ProductoCarrito } from "../types/interface";

export const CarritoComponent = () => {
  const { addGem, resetGemas } = useContext(GemasContext);
  const { carrito, setNewCart, deleteAll } = useCarrito();
  const { showCart, setShowCart } = useContext(CarritoContext);
  const [itemsComprados, setItemsComprados] = useState<number[]>([]);
  const [realizarCompra, setRealizarCompra] = useState(false);

  const keepValueItems = () => {
    const items: number[] = carrito.map((item) => item.id);
    setItemsComprados(items);
    setRealizarCompra(true);
  };

  useEffect(() => {
    if (realizarCompra) {
      handleCompra();
    }
  }, [realizarCompra]);

  const handleCompra = () => {
    const url = "http://localhost:3001/compras";
    const data = { itemsId: itemsComprados };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          alert("Compra realizada con éxito!");
          toggleShowCart();
          deleteAll();
          resetGemas();
        } else {
          alert("Error al realizar la compra.");
        }
      })
      .catch((error) => {
        alert("Error realizando la compra: " + error);
      });
  };

  const toggleShowCart = () => {
    setShowCart(!showCart);
  };

  const handleEliminarProducto = (product: ProductoCarrito) => {
    const nuevoCarrito = carrito.filter(
      (producto) => producto.id !== product.id
    );
    setNewCart(nuevoCarrito);
    addGem(product.precio);
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
                onClick={() => handleEliminarProducto(producto)}
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
        onClick={() => keepValueItems()}
        className="w-full btn btn-lg cursor-pointer font-bold hover:bg-primary px-2 text-white py-1 rounded-lg border border-gray-300 mr-2 bg-primary-dark"
      />
    </div>
  );
};
