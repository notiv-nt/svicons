/** @typedef {typeof __propDef.props}  AmiliaProps */
/** @typedef {typeof __propDef.events}  AmiliaEvents */
/** @typedef {typeof __propDef.slots}  AmiliaSlots */
export default class Amilia extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type AmiliaProps = typeof __propDef.props
export type AmiliaEvents = typeof __propDef.events
export type AmiliaSlots = typeof __propDef.slots
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
