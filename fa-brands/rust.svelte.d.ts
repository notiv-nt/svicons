/** @typedef {typeof __propDef.props}  RustProps */
/** @typedef {typeof __propDef.events}  RustEvents */
/** @typedef {typeof __propDef.slots}  RustSlots */
export default class Rust extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type RustProps = typeof __propDef.props
export type RustEvents = typeof __propDef.events
export type RustSlots = typeof __propDef.slots
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
