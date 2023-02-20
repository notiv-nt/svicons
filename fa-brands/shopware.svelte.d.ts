/** @typedef {typeof __propDef.props}  ShopwareProps */
/** @typedef {typeof __propDef.events}  ShopwareEvents */
/** @typedef {typeof __propDef.slots}  ShopwareSlots */
export default class Shopware extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ShopwareProps = typeof __propDef.props
export type ShopwareEvents = typeof __propDef.events
export type ShopwareSlots = typeof __propDef.slots
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
