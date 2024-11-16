import './App.css'
import React from 'react'
import Die from './components/Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {

  // function to generate a new die
  function generateNewDie(){
    return {
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: nanoid()
    }
  }

  // function to hold the dice
  function holdDie(id){
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? {...die, isHeld: true} : die
    }
    ))
  }

  // function for rolling the dice when button is clicked
  function rollDice(){
    if(tenzies){
      setDice(allNewDice())
      setTenzies(false)
    }else{
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? die : generateNewDie()
      }))
    }
  }

  // function for creating a new deck of dice
  function allNewDice(){
    let newDice = []
    for(let i = 0; i < 10; i++){
      newDice.push(generateNewDie())
    }
    return newDice
  }

  // states
  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  // useEffect for interacting with two states
  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld === true)
    const allSame = dice.every(die => die.value === dice[0].value)
    if(allHeld && allSame){
      setTenzies(true)
    }
  }, [dice])

  // Rendering die elements
  const dieElements = dice.map(die => {
    return <Die 
              key={die.id} 
              value={die.value} 
              handleClick={() => holdDie(die.id)}
              isHeld={die.isHeld}
            />
  })
  
  return (
    <>
      {tenzies && <Confetti />}
      <div className="container">
        <div className='game-container'>
          <div className='intro'>
            <h1 className='title'>TENZIES</h1>
            <p className='desc'>{tenzies ? 'Congratulations!!! You won!!!' :'Roll until all dice are the same. Click each die to freeze it at its current value between rolls.'}</p>
          </div>
          <div className="dice-container">
            {dieElements}
          </div>
          <button className='button' onClick={rollDice}>{tenzies? 'New Game' : 'Roll'}</button>
        </div>
      </div>
    </>
  )
}

export default App
