/** @typedef {typeof __propDef.props}  CashProps */
/** @typedef {typeof __propDef.events}  CashEvents */
/** @typedef {typeof __propDef.slots}  CashSlots */
export default class Cash extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type CashProps = typeof __propDef.props
export type CashEvents = typeof __propDef.events
export type CashSlots = typeof __propDef.slots
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
