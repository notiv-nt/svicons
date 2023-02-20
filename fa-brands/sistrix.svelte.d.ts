/** @typedef {typeof __propDef.props}  SistrixProps */
/** @typedef {typeof __propDef.events}  SistrixEvents */
/** @typedef {typeof __propDef.slots}  SistrixSlots */
export default class Sistrix extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SistrixProps = typeof __propDef.props
export type SistrixEvents = typeof __propDef.events
export type SistrixSlots = typeof __propDef.slots
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
