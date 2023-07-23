import React, { useState, useEffect } from "react";
import ProductoComponent from "./ProductoComponent";

interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  imagen: string;
  precio: number;
}

export const ListadoProductosComponent = () => {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/productos")
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Listado de Productos</h2>
      <div className="flex flex-wrap justify-between -mx-4">
        {productos.map((producto) => (
          <div key={producto.id} className="w-full sm:w-1/2 md:w-1/3 px-4">
            <ProductoComponent
              key={producto.id}
              imagen={producto.imagen}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              precio={producto.precio}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
