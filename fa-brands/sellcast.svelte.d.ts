/** @typedef {typeof __propDef.props}  SellcastProps */
/** @typedef {typeof __propDef.events}  SellcastEvents */
/** @typedef {typeof __propDef.slots}  SellcastSlots */
export default class Sellcast extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SellcastProps = typeof __propDef.props
export type SellcastEvents = typeof __propDef.events
export type SellcastSlots = typeof __propDef.slots
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
