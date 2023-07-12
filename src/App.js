import React from 'react'
import {generatePassword, copyPass} from './utils/script.js'

import './App.css'

const App = () => {

  return (
    <div className="container">
      <h1>Password Generator</h1>
      <div className='getPassword' onClick={copyPass}>
        <span id='generatedPassword'>Your Password Here</span>
      </div>
      <div id='copiedPass'>Password Copied</div>
      <form onSubmit={generatePassword}>
        <div>
          <input
            type="checkbox"
            name="capital"
            id="capital" defaultChecked/>
          <label
            htmlFor="capital">
            Capital letters
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            name="small"
            id="small" />
          <label
            htmlFor="small">
            Small letters
          </label>
        </div>
        <div>
          <input type="checkbox" name="number" id="number" />
          <label htmlFor="number">Numbers</label>
        </div>
        <div>
          <input type="checkbox" name="symbols" id="symbols" />
          <label htmlFor="symbols">Symbols</label>
        </div>
        <div>
          <span
            id='passlen' >
            50
          </span>
          <input
            type="range"
            name="passlength"
            min={1}
            max={200}
            id="passlength"
            onChange={(e) => document.getElementById('passlen').innerText = e.target.value} />
        </div>
        <div>
          <input type="submit" value="Generate Password" />
        </div>
      </form>
    </div>
  )
}

export default App
