import React from 'react';
import { Select } from 'antd'

const { Option } = Select;

// limited colors for differnet sizes
const SizeSelector = ({size, sizes, onChangeSize}) => {
  function sizeOptions() {
    return sizes.map((num) => {
      return (
        <Option value={num} key={num}>
          {num}
        </Option>
      )
    })
  }

  return (
    <div>
      <label htmlFor="size-options">Size:</label>
      <Select
        defaultValue={size}
        name="sizeOptions"
        id="size-options"
        onChange={onChangeSize}
      >
        {sizeOptions()}
      </Select>
    </div>
  )
}

export default SizeSelector