/** @typedef {typeof __propDef.props}  SellsyProps */
/** @typedef {typeof __propDef.events}  SellsyEvents */
/** @typedef {typeof __propDef.slots}  SellsySlots */
export default class Sellsy extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SellsyProps = typeof __propDef.props
export type SellsyEvents = typeof __propDef.events
export type SellsySlots = typeof __propDef.slots
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
