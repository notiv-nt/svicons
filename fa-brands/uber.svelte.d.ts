/** @typedef {typeof __propDef.props}  UberProps */
/** @typedef {typeof __propDef.events}  UberEvents */
/** @typedef {typeof __propDef.slots}  UberSlots */
export default class Uber extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type UberProps = typeof __propDef.props
export type UberEvents = typeof __propDef.events
export type UberSlots = typeof __propDef.slots
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
