/** @typedef {typeof __propDef.props}  IdealProps */
/** @typedef {typeof __propDef.events}  IdealEvents */
/** @typedef {typeof __propDef.slots}  IdealSlots */
export default class Ideal extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type IdealProps = typeof __propDef.props
export type IdealEvents = typeof __propDef.events
export type IdealSlots = typeof __propDef.slots
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
