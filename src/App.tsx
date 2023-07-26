import { useContext } from "react";
import { CarritoComponent } from "./components/CarritoComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { ListadoProductosComponent } from "./components/ListadoProductosComponent";
import { useFilters } from "./hooks/useFilters";
import { CarritoContext } from "./context/carrito";
import { useProducts } from "./hooks/useProducts";

function App() {
  const { getProducts } = useProducts();
  const { filterProducts } = useFilters();
  const { showCart } = useContext(CarritoContext);

  const filteredProducts = filterProducts(getProducts);

  return (
    <div
      className="min-h-full bg-fixed"
      style={{ backgroundImage: "url(background.webp)" }}
    >
      <HeaderComponent />
      <div className="min-h-full py-16 flex justify-center">
        {showCart ? (
          <CarritoComponent />
        ) : (
          <ListadoProductosComponent pociones={filteredProducts} />
        )}
      </div>
    </div>
  );
}

export default App;
