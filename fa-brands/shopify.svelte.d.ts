/** @typedef {typeof __propDef.props}  ShopifyProps */
/** @typedef {typeof __propDef.events}  ShopifyEvents */
/** @typedef {typeof __propDef.slots}  ShopifySlots */
export default class Shopify extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ShopifyProps = typeof __propDef.props
export type ShopifyEvents = typeof __propDef.events
export type ShopifySlots = typeof __propDef.slots
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
