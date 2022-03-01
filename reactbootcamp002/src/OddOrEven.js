import React from 'react'
import styles from './OddOrEven.module.css'
function OddOrEven({count, pickedNum}) {
  return (
    <div>
        <h2>Increment Number OddOrEven check</h2>
        <p className={styles.customText}>{count % 2 === 0 ? 'Even Number' : 'Odd Number'}</p>
        <h2>Clicked Number check</h2>
        <p className={styles.customText}>{pickedNum % 2 === 0 ? 'Even Number' : 'Odd Number'}</p>
    </div>
  )
}

export default OddOrEven