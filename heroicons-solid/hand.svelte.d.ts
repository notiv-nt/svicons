/** @typedef {typeof __propDef.props}  HandProps */
/** @typedef {typeof __propDef.events}  HandEvents */
/** @typedef {typeof __propDef.slots}  HandSlots */
export default class Hand extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type HandProps = typeof __propDef.props
export type HandEvents = typeof __propDef.events
export type HandSlots = typeof __propDef.slots
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
