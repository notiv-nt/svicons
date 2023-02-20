/** @typedef {typeof __propDef.props}  RProjectProps */
/** @typedef {typeof __propDef.events}  RProjectEvents */
/** @typedef {typeof __propDef.slots}  RProjectSlots */
export default class RProject extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type RProjectProps = typeof __propDef.props
export type RProjectEvents = typeof __propDef.events
export type RProjectSlots = typeof __propDef.slots
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
