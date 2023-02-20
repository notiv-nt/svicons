/** @typedef {typeof __propDef.props}  ShoppingCartProps */
/** @typedef {typeof __propDef.events}  ShoppingCartEvents */
/** @typedef {typeof __propDef.slots}  ShoppingCartSlots */
export default class ShoppingCart extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ShoppingCartProps = typeof __propDef.props
export type ShoppingCartEvents = typeof __propDef.events
export type ShoppingCartSlots = typeof __propDef.slots
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
