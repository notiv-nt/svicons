/** @typedef {typeof __propDef.props}  CakeProps */
/** @typedef {typeof __propDef.events}  CakeEvents */
/** @typedef {typeof __propDef.slots}  CakeSlots */
export default class Cake extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type CakeProps = typeof __propDef.props
export type CakeEvents = typeof __propDef.events
export type CakeSlots = typeof __propDef.slots
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
