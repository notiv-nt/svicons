/** @typedef {typeof __propDef.props}  XProps */
/** @typedef {typeof __propDef.events}  XEvents */
/** @typedef {typeof __propDef.slots}  XSlots */
export default class X extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type XProps = typeof __propDef.props
export type XEvents = typeof __propDef.events
export type XSlots = typeof __propDef.slots
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
