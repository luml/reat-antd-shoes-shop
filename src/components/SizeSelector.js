import React from 'react';

// limited colors for differnet sizes
const SizeSelector = ({size, sizes, onChangeSize}) => {
  function sizeOptions() {
    return sizes.map((num) => {
      return (
        <option value={num} key={num}>
          {num}
        </option>
      )
    })
  }

  return (
    <div>
      <label htmlFor="size-options">Size:</label>
      <select
        defaultValue={size}
        name="sizeOptions"
        id="size-options"
        onChange={(event) => onChangeSize(event.target.value)}
      >
        {sizeOptions()}
      </select>
    </div>
  )
}

export default SizeSelector