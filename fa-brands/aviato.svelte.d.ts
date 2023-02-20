/** @typedef {typeof __propDef.props}  AviatoProps */
/** @typedef {typeof __propDef.events}  AviatoEvents */
/** @typedef {typeof __propDef.slots}  AviatoSlots */
export default class Aviato extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type AviatoProps = typeof __propDef.props
export type AviatoEvents = typeof __propDef.events
export type AviatoSlots = typeof __propDef.slots
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
