/** @typedef {typeof __propDef.props}  CalculatorProps */
/** @typedef {typeof __propDef.events}  CalculatorEvents */
/** @typedef {typeof __propDef.slots}  CalculatorSlots */
export default class Calculator extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type CalculatorProps = typeof __propDef.props
export type CalculatorEvents = typeof __propDef.events
export type CalculatorSlots = typeof __propDef.slots
import { SvelteComponentTyped } from 'svelte'
declare const __propDef: {
  props: {
    [x: string]: any
  }
  events: {
    [evt: string]: CustomEvent<any>
  }
  slots: {}
}
export {}
