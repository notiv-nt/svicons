/** @typedef {typeof __propDef.props}  PythonProps */
/** @typedef {typeof __propDef.events}  PythonEvents */
/** @typedef {typeof __propDef.slots}  PythonSlots */
export default class Python extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type PythonProps = typeof __propDef.props
export type PythonEvents = typeof __propDef.events
export type PythonSlots = typeof __propDef.slots
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
