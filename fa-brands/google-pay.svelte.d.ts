/** @typedef {typeof __propDef.props}  GooglePayProps */
/** @typedef {typeof __propDef.events}  GooglePayEvents */
/** @typedef {typeof __propDef.slots}  GooglePaySlots */
export default class GooglePay extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type GooglePayProps = typeof __propDef.props
export type GooglePayEvents = typeof __propDef.events
export type GooglePaySlots = typeof __propDef.slots
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
