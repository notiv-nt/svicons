/** @typedef {typeof __propDef.props}  ViewListProps */
/** @typedef {typeof __propDef.events}  ViewListEvents */
/** @typedef {typeof __propDef.slots}  ViewListSlots */
export default class ViewList extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ViewListProps = typeof __propDef.props
export type ViewListEvents = typeof __propDef.events
export type ViewListSlots = typeof __propDef.slots
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
