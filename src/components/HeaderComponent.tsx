import { useCarrito } from "../hooks/useCarrito";

export const HeaderComponent = () => {
  const { carrito } = useCarrito();
  return (
    <div className="bg-stone-700 py-4 px-8 flex justify-between items-center sticky top-0 shadow-md z-10">
      <h1 className="text-white text-2xl font-bold">🧙‍♂️ Potion Shop</h1>
      <div className="flex gap-2 items-center">
        <img alt="gema" src="./gem.png" />
        <span>xxx Gemas</span>
      </div>
      <button className="text-white hover:underline">
        Ver Carrito ({carrito.length})
      </button>
    </div>
  );
};
