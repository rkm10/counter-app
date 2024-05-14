

import './App.css'

function App() {


  return (
    <>
      <input type="color" onChange={
        (e) => {
          document.querySelector('h1').style.color = e.target.value;
        }
      } />
      <h1>Back Ground Color Changer</h1>
      <input type="color" onChange={
        (e) => {
          document.body.style.background = e.target.value
        }
      } />
    </>
  )
}

export default App
