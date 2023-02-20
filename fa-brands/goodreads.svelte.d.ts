/** @typedef {typeof __propDef.props}  GoodreadsProps */
/** @typedef {typeof __propDef.events}  GoodreadsEvents */
/** @typedef {typeof __propDef.slots}  GoodreadsSlots */
export default class Goodreads extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type GoodreadsProps = typeof __propDef.props
export type GoodreadsEvents = typeof __propDef.events
export type GoodreadsSlots = typeof __propDef.slots
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
