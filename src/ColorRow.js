import React, { useState, useRef } from 'react'
import { colorBlockStyle } from './App';

const ColorRow = (color, isDark) => {
  const [copied, setCopied] = useState(false)

  const colorTextRef = useRef(null)

  const copyValue = (colorValue) => {
    navigator.clipboard.writeText(colorValue)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
      <div style={{padding: '5px'}}>
          <span style={{display: 'inline-block', width: '100px', textAlign: 'right'}}>{color.t}</span>
          <span className="color-block" ref={colorTextRef} style={colorBlockStyle(color.c, isDark)} onClick={() => copyValue(color.c)}>{color.c}</span>
          <div className={`copy ${copied && 'success'}`}>Copied!</div>
      </div>
  )
}

export default ColorRow
