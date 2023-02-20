/** @typedef {typeof __propDef.props}  ErlangProps */
/** @typedef {typeof __propDef.events}  ErlangEvents */
/** @typedef {typeof __propDef.slots}  ErlangSlots */
export default class Erlang extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ErlangProps = typeof __propDef.props
export type ErlangEvents = typeof __propDef.events
export type ErlangSlots = typeof __propDef.slots
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
