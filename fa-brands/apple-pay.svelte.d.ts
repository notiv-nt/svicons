/** @typedef {typeof __propDef.props}  ApplePayProps */
/** @typedef {typeof __propDef.events}  ApplePayEvents */
/** @typedef {typeof __propDef.slots}  ApplePaySlots */
export default class ApplePay extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ApplePayProps = typeof __propDef.props
export type ApplePayEvents = typeof __propDef.events
export type ApplePaySlots = typeof __propDef.slots
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
