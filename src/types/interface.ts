export interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  imagen: string;
  precio: number;
}

export interface FilterContextType {
  filters: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}

export interface FilterType {
  category: string;
  price: number;
}

export interface ProductoCarrito
  extends Pick<Producto, "imagen" | "nombre" | "id"> {}

export interface CarritoContextType {
  carrito: ProductoCarrito[];
  addToCarrito: (producto: ProductoCarrito) => void;
  deleteAll: () => void;
}
