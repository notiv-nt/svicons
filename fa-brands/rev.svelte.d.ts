/** @typedef {typeof __propDef.props}  RevProps */
/** @typedef {typeof __propDef.events}  RevEvents */
/** @typedef {typeof __propDef.slots}  RevSlots */
export default class Rev extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type RevProps = typeof __propDef.props
export type RevEvents = typeof __propDef.events
export type RevSlots = typeof __propDef.slots
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
