/** @typedef {typeof __propDef.props}  SearchProps */
/** @typedef {typeof __propDef.events}  SearchEvents */
/** @typedef {typeof __propDef.slots}  SearchSlots */
export default class Search extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SearchProps = typeof __propDef.props
export type SearchEvents = typeof __propDef.events
export type SearchSlots = typeof __propDef.slots
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
