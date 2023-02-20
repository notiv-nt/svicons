/** @typedef {typeof __propDef.props}  UspsProps */
/** @typedef {typeof __propDef.events}  UspsEvents */
/** @typedef {typeof __propDef.slots}  UspsSlots */
export default class Usps extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type UspsProps = typeof __propDef.props
export type UspsEvents = typeof __propDef.events
export type UspsSlots = typeof __propDef.slots
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
