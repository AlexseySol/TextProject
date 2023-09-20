import React from "react";
import item from "../Item.module.scss";

function InputColor({ label, onChange }) {
  const [selectedColor, setSelectedColor] = React.useState("#000000"); // Начальное значение цвета - черный

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);
    onChange(newColor); // Вызываем функцию обратного вызова, если она была передана
  };

  return (
    <div>
      <label>{label}</label>
      <input
        className={item.InputColor}
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
      />
    </div>
  );
}

export default InputColor;
