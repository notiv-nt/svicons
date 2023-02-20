/** @typedef {typeof __propDef.props}  SearchenginProps */
/** @typedef {typeof __propDef.events}  SearchenginEvents */
/** @typedef {typeof __propDef.slots}  SearchenginSlots */
export default class Searchengin extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SearchenginProps = typeof __propDef.props
export type SearchenginEvents = typeof __propDef.events
export type SearchenginSlots = typeof __propDef.slots
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
