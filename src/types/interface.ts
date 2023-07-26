export interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  imagen: string;
  precio: number;
}

export interface ProductoContextType {
  getProducts: Producto[];
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
  extends Pick<Producto, "imagen" | "nombre" | "id" | "precio"> {}

export interface CarritoContextType {
  carrito: ProductoCarrito[];
  addToCarrito: (producto: ProductoCarrito) => void;
  deleteAll: () => void;
  showCart: boolean;
  setShowCart: (show: boolean) => void;
  setNewCart: (producto: ProductoCarrito[]) => void;
}

export interface GemasContextType {
  gemas: number;
  subtractGem: (valorGema: number) => void;
}
