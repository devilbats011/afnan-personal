import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
  mutateMultipler,
  selectMutipleCount
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {

  const ComponentName = 'Counter';
  const count = useSelector(selectCount);
  const Mcount = useSelector(selectMutipleCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const [multipler, setmultipler ] = useState(1);

  useEffect(() => {
    dispatch(mutateMultipler(Number(multipler) || 0))
    console.log("run UseEffect "+ ComponentName )
  },[dispatch, multipler]);

  return (
    <div>
      <section className={styles.row}>
        <p> <span>Sum Multipler </span> {Mcount}</p> &nbsp;&nbsp;
        <input
          className={styles.textbox}
          aria-label="Set mutipler value"
          value={multipler}
          onChange={e => {
            setmultipler(e.target.value)
          }}
        />
      <hr></hr>
      </section>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
