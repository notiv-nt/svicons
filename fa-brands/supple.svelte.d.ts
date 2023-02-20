/** @typedef {typeof __propDef.props}  SuppleProps */
/** @typedef {typeof __propDef.events}  SuppleEvents */
/** @typedef {typeof __propDef.slots}  SuppleSlots */
export default class Supple extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SuppleProps = typeof __propDef.props
export type SuppleEvents = typeof __propDef.events
export type SuppleSlots = typeof __propDef.slots
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
