/** @typedef {typeof __propDef.props}  PaypalProps */
/** @typedef {typeof __propDef.events}  PaypalEvents */
/** @typedef {typeof __propDef.slots}  PaypalSlots */
export default class Paypal extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type PaypalProps = typeof __propDef.props
export type PaypalEvents = typeof __propDef.events
export type PaypalSlots = typeof __propDef.slots
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
