/** @typedef {typeof __propDef.props}  RewindProps */
/** @typedef {typeof __propDef.events}  RewindEvents */
/** @typedef {typeof __propDef.slots}  RewindSlots */
export default class Rewind extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type RewindProps = typeof __propDef.props
export type RewindEvents = typeof __propDef.events
export type RewindSlots = typeof __propDef.slots
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
