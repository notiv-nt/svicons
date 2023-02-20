/** @typedef {typeof __propDef.props}  FilterProps */
/** @typedef {typeof __propDef.events}  FilterEvents */
/** @typedef {typeof __propDef.slots}  FilterSlots */
export default class Filter extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type FilterProps = typeof __propDef.props
export type FilterEvents = typeof __propDef.events
export type FilterSlots = typeof __propDef.slots
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
