import React, { useState } from 'react'
import ColorBlock from './ColorBlock';
import './App.css'
import ColorForm from './ColorForm';

function App() {
  const [colors, setColors] = useState([
    "violet", "blue", "lightblue",
    "green", "greenyellow", 
    "yellow", "orange", 
    "red"
  ])

  const colorMap = colors.map((color, i) => {
    return(
      <ColorBlock key={color} color={color} />
    )
  })

  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }

  return (
    <div>
      {colorMap}
      <ColorForm addColor={addColor} />
    </div>
  )
};

export default App
