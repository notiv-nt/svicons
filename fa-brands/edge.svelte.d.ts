/** @typedef {typeof __propDef.props}  EdgeProps */
/** @typedef {typeof __propDef.events}  EdgeEvents */
/** @typedef {typeof __propDef.slots}  EdgeSlots */
export default class Edge extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type EdgeProps = typeof __propDef.props
export type EdgeEvents = typeof __propDef.events
export type EdgeSlots = typeof __propDef.slots
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
