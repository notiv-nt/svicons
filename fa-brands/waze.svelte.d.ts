/** @typedef {typeof __propDef.props}  WazeProps */
/** @typedef {typeof __propDef.events}  WazeEvents */
/** @typedef {typeof __propDef.slots}  WazeSlots */
export default class Waze extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type WazeProps = typeof __propDef.props
export type WazeEvents = typeof __propDef.events
export type WazeSlots = typeof __propDef.slots
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
