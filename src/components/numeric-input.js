import * as React from "react"
//import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md"
import { wrap, increment, decrement, input } from "./numeric-input.module.css"
export function NumericInput({
  onIncrement,
  onDecrement,
  className,
  disabled,
  ...props
}) {
  return (
    <div className={wrap}>
      <input
        disabled={disabled}
        type="numeric"
        className={[input, className].join(" ")}
        {...props}
      />
      <button
        disabled={disabled}
        className={increment}
        aria-label="Increment"
        onClick={onIncrement}
      >
        <span>+</span>
        Up
      </button>
      <button
        disabled={disabled}
        className={decrement}
        aria-label="Decrement"
        onClick={onDecrement}
      >
        <span>-</span>
        Down
      </button>
    </div>
  )
}
