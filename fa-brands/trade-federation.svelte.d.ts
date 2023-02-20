/** @typedef {typeof __propDef.props}  TradeFederationProps */
/** @typedef {typeof __propDef.events}  TradeFederationEvents */
/** @typedef {typeof __propDef.slots}  TradeFederationSlots */
export default class TradeFederation extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type TradeFederationProps = typeof __propDef.props
export type TradeFederationEvents = typeof __propDef.events
export type TradeFederationSlots = typeof __propDef.slots
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
