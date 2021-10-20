import React from 'react';
import { Select } from 'antd'

const { Option } = Select

const ColorSelector = ({color, colors, onChangeColor}) => {
  function colorOptions() {
    return colors.map((name) => {
      return (
        <Option value={name} key={name}>
          {name}
        </Option>
      )
    })
  }

  return (
    <div>
      <label htmlFor="color-options">Color:</label>
      <Select
        defaultValue={color}
        name="colorOptions"
        id="color-options"
        onChange={onChangeColor}
      >
        {colorOptions()}
      </Select>
    </div>
  )
}

export default ColorSelector