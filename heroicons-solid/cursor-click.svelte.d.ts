/** @typedef {typeof __propDef.props}  CursorClickProps */
/** @typedef {typeof __propDef.events}  CursorClickEvents */
/** @typedef {typeof __propDef.slots}  CursorClickSlots */
export default class CursorClick extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type CursorClickProps = typeof __propDef.props
export type CursorClickEvents = typeof __propDef.events
export type CursorClickSlots = typeof __propDef.slots
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
