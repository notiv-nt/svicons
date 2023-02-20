/** @typedef {typeof __propDef.props}  VariableProps */
/** @typedef {typeof __propDef.events}  VariableEvents */
/** @typedef {typeof __propDef.slots}  VariableSlots */
export default class Variable extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type VariableProps = typeof __propDef.props
export type VariableEvents = typeof __propDef.events
export type VariableSlots = typeof __propDef.slots
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
