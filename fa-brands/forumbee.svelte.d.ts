/** @typedef {typeof __propDef.props}  ForumbeeProps */
/** @typedef {typeof __propDef.events}  ForumbeeEvents */
/** @typedef {typeof __propDef.slots}  ForumbeeSlots */
export default class Forumbee extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ForumbeeProps = typeof __propDef.props
export type ForumbeeEvents = typeof __propDef.events
export type ForumbeeSlots = typeof __propDef.slots
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
