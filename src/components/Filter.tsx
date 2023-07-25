import React, { useEffect, useState } from "react";
import { useFilters } from "../hooks/useFilters";

const Filter = () => {
  const categories = [
    {
      id: 1,
      name: "all",
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
    category: "all",
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
    <div className="flex my-4">
      <label htmlFor="category" className="mr-4 text-white">
        Filtros:
      </label>
      <select
        id="category"
        onChange={handleChangeCategory}
        value={localFilters.category}
      >
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <div>
        <label className="mr-4 text-white" htmlFor="price">
          Precio a partir de:
        </label>
        <input
          type="range"
          id="price"
          min="0"
          max="5"
          onChange={handleChangePrice}
          value={localFilters.price}
        />
        <span>${localFilters.price}</span>
      </div>
    </div>
  );
};

export default Filter;
