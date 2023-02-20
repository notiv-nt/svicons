/** @typedef {typeof __propDef.props}  RavelryProps */
/** @typedef {typeof __propDef.events}  RavelryEvents */
/** @typedef {typeof __propDef.slots}  RavelrySlots */
export default class Ravelry extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type RavelryProps = typeof __propDef.props
export type RavelryEvents = typeof __propDef.events
export type RavelrySlots = typeof __propDef.slots
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
