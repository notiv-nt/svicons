/** @typedef {typeof __propDef.props}  DyalogProps */
/** @typedef {typeof __propDef.events}  DyalogEvents */
/** @typedef {typeof __propDef.slots}  DyalogSlots */
export default class Dyalog extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type DyalogProps = typeof __propDef.props
export type DyalogEvents = typeof __propDef.events
export type DyalogSlots = typeof __propDef.slots
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
