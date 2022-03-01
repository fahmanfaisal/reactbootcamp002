import React from 'react'
import styles from './Card.module.css'

function CardNum({cardValue, pickedValue}) {

    const pickedCardValue = () =>{
        pickedValue(cardValue)
    }

  return (
    <div className={styles.container}>
        <p>Please click the circle number for output:</p>
        <p className={styles.card} onClick={pickedCardValue}>{cardValue}</p>
    </div>
  )
}

export default CardNum