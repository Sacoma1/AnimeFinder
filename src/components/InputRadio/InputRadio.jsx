import React from "react";

export const CategoryOption = ({ value, name, label }) => {
  const id = `${name}-${value}`;
  return (
    <>
      <label htmlFor="">
        {label}
        <input type="radio" name={name} id={id} value={String(value)} />
      </label>
    </>
  );
};
