/** @typedef {typeof __propDef.props}  FireProps */
/** @typedef {typeof __propDef.events}  FireEvents */
/** @typedef {typeof __propDef.slots}  FireSlots */
export default class Fire extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type FireProps = typeof __propDef.props
export type FireEvents = typeof __propDef.events
export type FireSlots = typeof __propDef.slots
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
