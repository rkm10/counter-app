import React, { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  let stock = 10

  return (
    <>
      <div className='wrapper'>
        <h1>Counter App</h1>
        <h3>Stock Left :10</h3>
        <div className='sub-wrapper'>
          <button className='less' onClick={
            () => {
              if (counter > 0) {
                setCounter(counter - 1)
              }
            }
          }>-</button>
          <p>{counter}</p>
          <button className='plus' onClick={
            () => {
              if (counter < stock) {
                setCounter(counter + 1)
              }
            }
          }>+</button>
        </div>
      </div>
    </>
  )
}

export default App
