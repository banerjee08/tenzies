import './App.css'

function App() {
  
  return (
    <>
      <div className="container">
        <div className='game-container'>
          <div className='intro'>
            <h1 className='title'>TENZIES</h1>
            <p className='desc'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          </div>
          <div className="dice-container">
            <h3 className='die'>1</h3>
            <h3 className='die'>1</h3>
            <h3 className='die'>1</h3>
            <h3 className='die'>1</h3>
            <h3 className='die'>1</h3>
            <h3 className='die'>1</h3>
            <h3 className='die'>1</h3>
            <h3 className='die'>1</h3>
            <h3 className='die'>1</h3>
            <h3 className='die'>1</h3>
          </div>
          <button className='button'>Roll</button>
        </div>
      </div>
    </>
  )
}

export default App
