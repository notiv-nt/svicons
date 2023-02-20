/** @typedef {typeof __propDef.props}  PadletProps */
/** @typedef {typeof __propDef.events}  PadletEvents */
/** @typedef {typeof __propDef.slots}  PadletSlots */
export default class Padlet extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type PadletProps = typeof __propDef.props
export type PadletEvents = typeof __propDef.events
export type PadletSlots = typeof __propDef.slots
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
