/** @typedef {typeof __propDef.props}  ProductHuntProps */
/** @typedef {typeof __propDef.events}  ProductHuntEvents */
/** @typedef {typeof __propDef.slots}  ProductHuntSlots */
export default class ProductHunt extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ProductHuntProps = typeof __propDef.props
export type ProductHuntEvents = typeof __propDef.events
export type ProductHuntSlots = typeof __propDef.slots
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
