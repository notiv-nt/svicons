/** @typedef {typeof __propDef.props}  ElloProps */
/** @typedef {typeof __propDef.events}  ElloEvents */
/** @typedef {typeof __propDef.slots}  ElloSlots */
export default class Ello extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ElloProps = typeof __propDef.props
export type ElloEvents = typeof __propDef.events
export type ElloSlots = typeof __propDef.slots
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
