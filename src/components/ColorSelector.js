import React from 'react';

const ColorSelector = ({color, colors, onChangeColor}) => {
  function colorOptions() {
    return colors.map((name) => {
      return (
        <option value={name} key={name}>
          {name}
        </option>
      )
    })
  }

  return (
    <div>
      <label htmlFor="color-options">Color:</label>
      <select
        defaultValue={color}
        name="colorOptions"
        id="color-options"
        onChange={(event) => onChangeColor(event.target.value)}
      >
        {colorOptions()}
      </select>
    </div>
  )
}

export default ColorSelector