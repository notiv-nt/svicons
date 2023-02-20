/** @typedef {typeof __propDef.props}  VnvProps */
/** @typedef {typeof __propDef.events}  VnvEvents */
/** @typedef {typeof __propDef.slots}  VnvSlots */
export default class Vnv extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type VnvProps = typeof __propDef.props
export type VnvEvents = typeof __propDef.events
export type VnvSlots = typeof __propDef.slots
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
