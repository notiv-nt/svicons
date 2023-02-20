/** @typedef {typeof __propDef.props}  AirbnbProps */
/** @typedef {typeof __propDef.events}  AirbnbEvents */
/** @typedef {typeof __propDef.slots}  AirbnbSlots */
export default class Airbnb extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type AirbnbProps = typeof __propDef.props
export type AirbnbEvents = typeof __propDef.events
export type AirbnbSlots = typeof __propDef.slots
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
