/** @typedef {typeof __propDef.props}  LineProps */
/** @typedef {typeof __propDef.events}  LineEvents */
/** @typedef {typeof __propDef.slots}  LineSlots */
export default class Line extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type LineProps = typeof __propDef.props
export type LineEvents = typeof __propDef.events
export type LineSlots = typeof __propDef.slots
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
