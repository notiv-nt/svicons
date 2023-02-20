/** @typedef {typeof __propDef.props}  RebelProps */
/** @typedef {typeof __propDef.events}  RebelEvents */
/** @typedef {typeof __propDef.slots}  RebelSlots */
export default class Rebel extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type RebelProps = typeof __propDef.props
export type RebelEvents = typeof __propDef.events
export type RebelSlots = typeof __propDef.slots
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
