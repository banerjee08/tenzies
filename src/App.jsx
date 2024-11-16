import './App.css'
import React from 'react'
import Die from './components/Die'
import { nanoid } from 'nanoid'

function App() {

  function rollDice(){
    setDice(allNewDice())
  }
  // function for creating a new deck of dice
  function allNewDice(){
    let newDice = []
    for(let i = 0; i < 10; i++){
      let newDie = Math.floor(Math.random() * 6) + 1
      newDice.push(newDie)
    }
    return newDice
  }

  const [dice, setDice] = React.useState(allNewDice())

  // Rendering die elements
  const dieElements = dice.map(die => {
    return <Die key={nanoid()} value={die} />
  })
  // console.log(dice)
  
  return (
    <>
      <div className="container">
        <div className='game-container'>
          <div className='intro'>
            <h1 className='title'>TENZIES</h1>
            <p className='desc'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          </div>
          <div className="dice-container">
            {dieElements}
          </div>
          <button className='button' onClick={rollDice}>Roll</button>
        </div>
      </div>
    </>
  )
}

export default App
