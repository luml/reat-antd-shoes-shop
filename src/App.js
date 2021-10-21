import React, { useState } from 'react';
import SizeSelector from './components/SizeSelector';
import ColorSelector from './components/ColorSelector';
import './App.less';

function ProductImage({color}) {
  return (
    <img src={`./imgs/${color}.jpg`} alt="Shoes With Color" />
  )
}

const App = () => {
  const [size, setSize] = useState('8')
  const [sizes, setSizes] = useState(window.Inventory.allSizes)
  const [color, setColor] = useState("red")
  const [colors, setColors] = useState(window.Inventory.allColors)
  const onChangeSize = (selectedSize) => {
    // reset colors based on chose size
    const avaiableColors = window.Inventory.bySize[selectedSize]
    setColors(avaiableColors)
    // if current color isn't avaiable, then reset current color from avaibleColors index 0
    if (!avaiableColors.indexOf(color) > -1) setColor(avaiableColors[0])
    setSize(selectedSize)
  }
  const onChangeColor = (name) => {
    // reset sizes based on chose color
    const avaiableSizes = window.Inventory.byColor[name]
    setSizes(avaiableSizes)
    // if current size isn't avaible, then reset current size from avaiableSizes index 0
    if (!avaiableSizes.indexOf(size) > -1) setSize(avaiableSizes[0])
    setColor(name)
  }
  return (
    <>
      <section className="customizer">
        <div className="product-image">
          <ProductImage color={color} />
        </div>
        <div className="selectors">
          <SizeSelector size={size} sizes={sizes} onChangeSize={onChangeSize}/>
          <ColorSelector colors={colors} color={color} onChangeColor={onChangeColor} />
        </div>
      </section>
    </>
  )
  }

export default App;