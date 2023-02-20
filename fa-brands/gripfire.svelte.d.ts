/** @typedef {typeof __propDef.props}  GripfireProps */
/** @typedef {typeof __propDef.events}  GripfireEvents */
/** @typedef {typeof __propDef.slots}  GripfireSlots */
export default class Gripfire extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type GripfireProps = typeof __propDef.props
export type GripfireEvents = typeof __propDef.events
export type GripfireSlots = typeof __propDef.slots
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
