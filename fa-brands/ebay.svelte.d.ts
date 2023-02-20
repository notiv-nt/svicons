/** @typedef {typeof __propDef.props}  EbayProps */
/** @typedef {typeof __propDef.events}  EbayEvents */
/** @typedef {typeof __propDef.slots}  EbaySlots */
export default class Ebay extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type EbayProps = typeof __propDef.props
export type EbayEvents = typeof __propDef.events
export type EbaySlots = typeof __propDef.slots
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
