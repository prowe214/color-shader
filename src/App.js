import React, {useState} from 'react';
import './App.css';
import Color from "color";

const list = [1,2,3,4,5,6,7,8,9]

function App() {
  const initialColor = 'C63527'
  const renderLightens = (color) => list.map(num => {
    return {t: `lighten ${10-num}0% `, c: Color('#fff').mix(Color(`#${color}`), num/10).hex()}
  })
  const renderDarkens = (color) => list.map(num => {
    return {t: `darken ${num}0% `, c: Color(`#${color}`).darken(num/10).hex()}
  })

  const [baseColor, setBaseColor] = useState(initialColor)
  const [renderBaseColor, setRenderBaseColor] = useState({t: '----BASE----', c: `#${initialColor}`})
  const [lightens, setLightens] = useState(renderLightens(initialColor))
  const [darkens, setDarkens] = useState(renderDarkens(initialColor))
  const [error, setError] = useState(false)

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
    setRenderBaseColor({t: '----BASE----', c: `#${baseColor}`})
    const hasHash = baseColor.includes('#')

    if (!hasHash) {
      setLightens(renderLightens(baseColor))
      setDarkens(renderDarkens(baseColor))
      setError('')
    } else {
      setError('yo, for real, leave off the hash')
    }
  }

  const row = (color, isDark) => (
    <div style={{padding: '5px'}}>
      <span style={{display: 'inline-block', width: '100px', textAlign: 'right'}}>{color.t}</span>
      <span style={colorBlockStyle(color.c, isDark)}>{color.c}</span>
    </div>
  )

  return (
    <div className="App">
      <div style={{width: '400px', display: 'inline-block', marginTop: '40px'}}>
        <div>Don't add a hash before the hex code</div>
      </div>
      <div style={{marginBottom: '16px'}}>
        <input style={inputStyle} onChange={handleChange} onKeyDown={handleKeyDown} value={baseColor} placeholder="Hex Code" />
        <button style={{...inputStyle, marginLeft: '12px', cursor: 'pointer', backgroundColor: '#e0e0e0'}} type="submit" onClick={handleCalculate}>Do It!</button>
        {error ? <div style={{color: 'red', fontWeight: 'bold'}}>{error}</div> : null}
      </div>


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
