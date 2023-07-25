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
