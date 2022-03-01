import {React, useState} from 'react'
import OddOrEven from './OddOrEven'
import CardNum from './CardNum'
import './App.css'

const App = () => {

  const [count, setCount] = useState(0)
  const [randomCards , setRandomCards] = useState([1,2,3,4,5])
  const [pickedNum, setPickedNum] = useState(null)
  

  const incrementCount = () => {
    setCount((prevCount) => {
      return prevCount + 1
    })
  }
  const decrementCount = () => {
    if (count > 0) {
      setCount((prevCount) => {
        return prevCount - 1
      })
    }
  }
  const resetCount = () => {
    setCount(0)
  }

  const pickedValue = (cardNum) =>{
    setPickedNum(cardNum)
  }

  return (
    <div className='app'>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
      <OddOrEven count={count} pickedNum={pickedNum}/>
      {randomCards.map(cardValue => {
        return  <CardNum cardValue={cardValue} pickedValue={pickedValue}/>
      })}
     
    </div>
  )
}

export default App