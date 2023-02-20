/** @typedef {typeof __propDef.props}  MdbProps */
/** @typedef {typeof __propDef.events}  MdbEvents */
/** @typedef {typeof __propDef.slots}  MdbSlots */
export default class Mdb extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type MdbProps = typeof __propDef.props
export type MdbEvents = typeof __propDef.events
export type MdbSlots = typeof __propDef.slots
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
