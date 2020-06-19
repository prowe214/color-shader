import React, {useState, useRef, useEffect} from 'react';
import ColorRow from './ColorRow'
import './App.css';
import Color from "color";

const list = [1,2,3,4,5,6,7,8,9]

export const colorBlockStyle = (color, isDark) => ({
  display: 'inline-block',
  padding: '10px',
  marginLeft: '10px',
  backgroundColor: `${color}`,
  borderRadius: '6px',
  width: '100px',
  color: isDark ? 'white' : 'black'
})

const checkIfHex = (someColor) => {
  if (someColor.length <= 7 && !someColor.includes('#')) {
    return '#' + someColor
  }
  return someColor
}


function App() {
  const initialColor = '#C63527'
  const inputRef = useRef(null)

  const renderLightens = (color) => list.map(num => {
    const renderColor = checkIfHex(color)

    if (renderColor.includes('#')) return {t: `lighten ${10-num}0% `, c: Color('#fff').mix(Color(`${renderColor}`), num/10).hex()}
    if (renderColor.includes('rgb')) return {t: `lighten ${10-num}0% `, c: Color('#fff').mix(Color(`${renderColor}`), num/10).rgb()}
    return {t: `lighten ${10-num}0% `, c: Color('#fff').mix(Color(`${renderColor}`), num/10).hex()}
  })

  const renderDarkens = (color) => list.map(num => {
    const renderColor = checkIfHex(color)

    return renderColor.includes('#') 
      ? {t: `darken ${num}0% `, c: Color(`${renderColor}`).darken(num/10).hex()}
      : {t: `darken ${num}0% `, c: Color(`${renderColor}`).darken(num/10)}
  })

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const [baseColor, setBaseColor] = useState(initialColor)
  const [renderBaseColor, setRenderBaseColor] = useState({t: 'BASE', c: `${initialColor}`})
  const [lightens, setLightens] = useState(renderLightens(initialColor))
  const [darkens, setDarkens] = useState(renderDarkens(initialColor))
  const [error, setError] = useState(false)


  const inputStyle = {
    padding: '12px',
    fontSize: '16px',
    border: '5px solid grey',
    borderRadius: '8px',
    marginTop: '10px'
  }


  const handleChange = (e) => {
    setBaseColor(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCalculate()
    }
  }

  const handleCalculate = () => {
    let color = baseColor
    console.log(baseColor)
    // if a hex code (rgb can't be less than 7)
    if (baseColor.length <= 7) {
      if (!baseColor.includes('#')) {
        color = '#' + baseColor
      }
    }
    if (color.includes('#')) {
      setError(false)
      setRenderBaseColor({t: 'BASE', c: `${color}`})
      setLightens(renderLightens(color))
      setDarkens(renderDarkens(color))
    } else {
      setError('This can only handle hex codes at the moment, but will support all colors soon!')
    }
  }

  return (
    <div className="App">
      <div style={{width: '400px', display: 'inline-block', marginTop: '40px', fontWeight: 'bold', fontStyle: 'italic', fontSize: '40px'}}>
        <div>Shaderade</div>
      </div>
      <div style={{marginBottom: '16px'}}>
        <input ref={inputRef} className="input" style={inputStyle} onChange={handleChange} onKeyDown={handleKeyDown} value={baseColor} placeholder="Hex Code" />
        <button style={{...inputStyle, border: '1px solid grey', marginLeft: '12px', cursor: 'pointer', backgroundColor: '#e0e0e0'}} type="submit" onClick={handleCalculate}>Shade It!</button>
        {error ? <div style={{color: 'red', fontWeight: 'bold'}}>{error}</div> : null}
      </div>
      <div style={{marginBottom: '20px'}}>Click any color to copy its value to the clipboard</div>


      {lightens.map(color => ColorRow(color))}

      <div style={{textAlign: 'center'}}>
        <div style={{display: 'inline-block', width: '400px', border: '3px solid black', borderRadius: '5px', backgroundColor: '#f0f0f0'}}>
          {ColorRow(renderBaseColor)}
        </div>
      </div>

      {darkens.map(color => (ColorRow(color, true)))}
    </div>
  );
}

export default App;
