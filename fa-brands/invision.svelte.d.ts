/** @typedef {typeof __propDef.props}  InvisionProps */
/** @typedef {typeof __propDef.events}  InvisionEvents */
/** @typedef {typeof __propDef.slots}  InvisionSlots */
export default class Invision extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type InvisionProps = typeof __propDef.props
export type InvisionEvents = typeof __propDef.events
export type InvisionSlots = typeof __propDef.slots
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
