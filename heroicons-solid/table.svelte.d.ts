/** @typedef {typeof __propDef.props}  TableProps */
/** @typedef {typeof __propDef.events}  TableEvents */
/** @typedef {typeof __propDef.slots}  TableSlots */
export default class Table extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type TableProps = typeof __propDef.props
export type TableEvents = typeof __propDef.events
export type TableSlots = typeof __propDef.slots
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
