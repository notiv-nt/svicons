/** @typedef {typeof __propDef.props}  UpsProps */
/** @typedef {typeof __propDef.events}  UpsEvents */
/** @typedef {typeof __propDef.slots}  UpsSlots */
export default class Ups extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type UpsProps = typeof __propDef.props
export type UpsEvents = typeof __propDef.events
export type UpsSlots = typeof __propDef.slots
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
