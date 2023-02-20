/** @typedef {typeof __propDef.props}  SortDescendingProps */
/** @typedef {typeof __propDef.events}  SortDescendingEvents */
/** @typedef {typeof __propDef.slots}  SortDescendingSlots */
export default class SortDescending extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SortDescendingProps = typeof __propDef.props
export type SortDescendingEvents = typeof __propDef.events
export type SortDescendingSlots = typeof __propDef.slots
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
