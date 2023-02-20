/** @typedef {typeof __propDef.props}  VineProps */
/** @typedef {typeof __propDef.events}  VineEvents */
/** @typedef {typeof __propDef.slots}  VineSlots */
export default class Vine extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type VineProps = typeof __propDef.props
export type VineEvents = typeof __propDef.events
export type VineSlots = typeof __propDef.slots
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
