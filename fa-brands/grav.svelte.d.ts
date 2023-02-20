/** @typedef {typeof __propDef.props}  GravProps */
/** @typedef {typeof __propDef.events}  GravEvents */
/** @typedef {typeof __propDef.slots}  GravSlots */
export default class Grav extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type GravProps = typeof __propDef.props
export type GravEvents = typeof __propDef.events
export type GravSlots = typeof __propDef.slots
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
