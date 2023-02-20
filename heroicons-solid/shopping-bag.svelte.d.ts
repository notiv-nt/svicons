/** @typedef {typeof __propDef.props}  ShoppingBagProps */
/** @typedef {typeof __propDef.events}  ShoppingBagEvents */
/** @typedef {typeof __propDef.slots}  ShoppingBagSlots */
export default class ShoppingBag extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ShoppingBagProps = typeof __propDef.props
export type ShoppingBagEvents = typeof __propDef.events
export type ShoppingBagSlots = typeof __propDef.slots
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
