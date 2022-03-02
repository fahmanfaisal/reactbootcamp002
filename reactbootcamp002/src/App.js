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
      <p className="alert alert-danger" role="alert">Count: {count}</p>
      <button type="button" className="btn btn-outline-primary mr-1 lh-lg" onClick={incrementCount}>Increment</button>
      <button type="button" className="btn btn-outline-warning lh-lg" onClick={decrementCount}>Decrement</button>
      <button type="button" className="btn btn-outline-danger ml-1 lh-lg" onClick={resetCount}>Reset</button>
      <OddOrEven count={count} pickedNum={pickedNum}/>
      {randomCards.map(cardValue => {
        return  <CardNum cardValue={cardValue} pickedValue={pickedValue}/>
      })}
     
    </div>
  )
}

export default App