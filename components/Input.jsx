'use client';

import { useState } from 'react';

const Input = ({ type = 'text', label, placeholder, value, onChange }) => {
  const [valueInput, setValueInput] = useState(value);

  return (
    <div className="flex flex-col ">
      <label htmlFor="search" className="text-white text-sm text-bold mb-2">
        {label}
      </label>
      <input
        id="search"
        type="text"
        placeholder={placeholder}
        className="px-2 p-2.5 bg-white text-black text-sm  rounder  bg-transparent rounded-md  outline-none"
        autoComplete="off"
        onChange={onChange}
        required
        value={value}
      />
    </div>
  );
};
export default Input;
