import { useEffect, useState } from "react";
import { CarritoComponent } from "./components/CarritoComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { ListadoProductosComponent } from "./components/ListadoProductosComponent";
import { Producto } from "./types/interface";
import { useFilters } from "./hooks/useFilters";

function App() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [showCarrito, setShowCarrito] = useState(false);
  const { filterProducts, setFilter } = useFilters();

  const filteredProducts = filterProducts(productos);

  useEffect(() => {
    fetch("http://localhost:3001/productos")
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div
      className="min-h-full bg-fixed"
      style={{ backgroundImage: "url(background.webp)" }}
    >
      <HeaderComponent />
      <div className="flex justify-center min-h-full">
        <div className=" w-3/4 py-16">
          {showCarrito ? (
            <CarritoComponent />
          ) : (
            <ListadoProductosComponent productos={filteredProducts} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
