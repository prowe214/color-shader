import React, {useState} from 'react';
import './App.css';
import Color from "color";

const list = [1,2,3,4,5,6,7,8,9]

function App() {
  const initialColor = 'C63527'
  const renderLightens = (color) => list.map(num => {
    return {t: `lighten ${num}0% `, c: Color('#fff').mix(Color(`#${color}`), num/10).hex()}
  })
  const renderDarkens = (color) => list.map(num => {
    return {t: `darken ${num}0% `, c: Color(`#${color}`).darken(num/10).hex()}
  })

  const [baseColor, setBaseColor] = useState(initialColor)
  const [renderBaseColor, setRenderBaseColor] = useState({t: '----BASE----', c: `#${initialColor}`})
  const [lightens, setLightens] = useState(renderLightens(initialColor))
  const [darkens, setDarkens] = useState(renderDarkens(initialColor))

  const colorBlockStyle = (color, isDark) => ({
    display: 'inline-block',
    padding: '10px',
    marginLeft: '10px',
    backgroundColor: `${color}`,
    borderRadius: '6px',
    width: '100px',
    color: isDark ? 'white' : 'black'
  })

  const inputStyle = {
    padding: '12px',
    fontSize: '16px',
    border: '1px solid grey',
    borderRadius: '5px',
    marginTop: '40px'
  }


  const handleChange = (e) => {
    console.log('input', e.target.value)
    setBaseColor(e.target.value)
    console.log('basecolor', baseColor)
    setRenderBaseColor({t: '----BASE----', c: `#${baseColor}`})
    if (e.target.value.length === 6) {
      setLightens(renderLightens(baseColor))
      setDarkens(renderDarkens(baseColor))
    } else {
      setLightens([])
      setDarkens([])
    }
  }

  const row = (color, isDark) => (
    <div style={{padding: '5px'}}>
      <span style={{display: 'inline-block', width: '100px', textAlign: 'right'}}>{color.t}</span>
      <span style={colorBlockStyle(color.c, isDark)}>{color.c}</span>
    </div>
  )

  console.log('lightens', lightens)
  return (
    <div className="App">
      <div style={{width: '400px'}}>
        <div>Don't add a hash before the hex code</div>
        <div>Hex must be 6 chars</div>
      </div>
      <input style={inputStyle} onChange={handleChange} value={baseColor} placeholder="Hex Code" />

      {lightens.map(color => row(color))}

      <div style={{textAlign: 'center'}}>
        <div style={{display: 'inline-block', width: '400px', boxShadow: '0px 3px 3px grey', backgroundColor: '#f0f0f0'}}>
          {row(renderBaseColor)}
        </div>
      </div>

      {darkens.map(color => (row(color, true)))}
    </div>
  );
}

export default App;
