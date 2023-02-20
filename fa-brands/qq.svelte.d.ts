/** @typedef {typeof __propDef.props}  QqProps */
/** @typedef {typeof __propDef.events}  QqEvents */
/** @typedef {typeof __propDef.slots}  QqSlots */
export default class Qq extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type QqProps = typeof __propDef.props
export type QqEvents = typeof __propDef.events
export type QqSlots = typeof __propDef.slots
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
