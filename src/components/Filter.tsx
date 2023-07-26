import React, { useEffect, useState } from "react";
import { useFilters } from "../hooks/useFilters";

const Filter = () => {
  const categories = [
    {
      id: 1,
      name: "Todos",
    },
    {
      id: 2,
      name: "Salud",
    },
    {
      id: 3,
      name: "Veneno",
    },
    {
      id: 4,
      name: "Proteccion",
    },
    {
      id: 5,
      name: "Estamina",
    },
  ];
  const { setFilter } = useFilters();
  const [localFilters, setLocalFilters] = useState({
    category: "Todos",
    price: 0,
  });

  useEffect(() => {
    setFilter(localFilters);
  }, [localFilters, setFilter]);

  const handleChangeCategory = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const categoryValue = event.target.value;
    setLocalFilters((prevState) => ({
      ...prevState,
      category: categoryValue,
    }));
  };

  const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const priceValue = Number(event.target.value);
    setLocalFilters((prevState) => ({
      ...prevState,
      price: priceValue,
    }));
  };

  return (
    <div className="flex flex-col items-center my-4">
      <label htmlFor="category" className="mr-4 text-white text-lg">
        Filtros:
      </label>
      <select
        id="category"
        onChange={handleChangeCategory}
        value={localFilters.category}
        className="border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-800"
      >
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <div className="mt-4">
        <label className="mr-4 text-white text-lg" htmlFor="price">
          Precio a partir de:
        </label>
        <input
          type="range"
          id="price"
          min="0"
          max="3"
          onChange={handleChangePrice}
          value={localFilters.price}
          className="w-full bg-blue-200 rounded-md appearance-none h-3 outline-none"
        />
        <span className="text-white">{`$${localFilters.price}`}</span>
      </div>
    </div>
  );
};

export default Filter;
