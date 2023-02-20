/** @typedef {typeof __propDef.props}  TruckProps */
/** @typedef {typeof __propDef.events}  TruckEvents */
/** @typedef {typeof __propDef.slots}  TruckSlots */
export default class Truck extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type TruckProps = typeof __propDef.props
export type TruckEvents = typeof __propDef.events
export type TruckSlots = typeof __propDef.slots
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
