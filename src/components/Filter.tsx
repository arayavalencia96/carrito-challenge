import React, { useState } from "react";

const Filter = () => {
  const [category, setCategory] = useState("all");
  const categories = [
    {
      id: 1,
      name: "Salud",
    },
    {
      id: 2,
      name: "Veneno",
    },
    {
      id: 3,
      name: "Proteccion",
    },
    {
      id: 4,
      name: "Estamina",
    },
    {
      id: 5,
      name: "Proteccion",
    },
  ];

  const handleChangeCategory = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCategory(event.target.value);
  };

  return (
    <div className="flex my-4">
      <label htmlFor="category" className="mr-4 text-white">
        Filtros:
      </label>
      {categories.map((category) => (
        <label
          key={category.id}
          id="category"
          className="cursor-pointer label mr-4 flex items-center"
        >
          <span className="label-text mr-1 font-bold">{category.name}</span>
          <input
            type="checkbox"
            onChange={handleChangeCategory}
            className="cursor-pointer form-checkbox h-4 w-4 rounded-xl border-2 focus:ring-red-400"
          />
        </label>
      ))}
    </div>
  );
};

export default Filter;
