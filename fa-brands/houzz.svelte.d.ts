/** @typedef {typeof __propDef.props}  HouzzProps */
/** @typedef {typeof __propDef.events}  HouzzEvents */
/** @typedef {typeof __propDef.slots}  HouzzSlots */
export default class Houzz extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type HouzzProps = typeof __propDef.props
export type HouzzEvents = typeof __propDef.events
export type HouzzSlots = typeof __propDef.slots
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
