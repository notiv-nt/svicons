/** @typedef {typeof __propDef.props}  DhlProps */
/** @typedef {typeof __propDef.events}  DhlEvents */
/** @typedef {typeof __propDef.slots}  DhlSlots */
export default class Dhl extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type DhlProps = typeof __propDef.props
export type DhlEvents = typeof __propDef.events
export type DhlSlots = typeof __propDef.slots
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
