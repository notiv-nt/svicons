/** @typedef {typeof __propDef.props}  PalfedProps */
/** @typedef {typeof __propDef.events}  PalfedEvents */
/** @typedef {typeof __propDef.slots}  PalfedSlots */
export default class Palfed extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type PalfedProps = typeof __propDef.props
export type PalfedEvents = typeof __propDef.events
export type PalfedSlots = typeof __propDef.slots
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
