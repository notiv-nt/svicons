/** @typedef {typeof __propDef.props}  GoodreadsGProps */
/** @typedef {typeof __propDef.events}  GoodreadsGEvents */
/** @typedef {typeof __propDef.slots}  GoodreadsGSlots */
export default class GoodreadsG extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type GoodreadsGProps = typeof __propDef.props
export type GoodreadsGEvents = typeof __propDef.events
export type GoodreadsGSlots = typeof __propDef.slots
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
