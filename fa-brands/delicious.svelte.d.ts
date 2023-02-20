/** @typedef {typeof __propDef.props}  DeliciousProps */
/** @typedef {typeof __propDef.events}  DeliciousEvents */
/** @typedef {typeof __propDef.slots}  DeliciousSlots */
export default class Delicious extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type DeliciousProps = typeof __propDef.props
export type DeliciousEvents = typeof __propDef.events
export type DeliciousSlots = typeof __propDef.slots
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
