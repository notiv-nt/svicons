/** @typedef {typeof __propDef.props}  SwiftProps */
/** @typedef {typeof __propDef.events}  SwiftEvents */
/** @typedef {typeof __propDef.slots}  SwiftSlots */
export default class Swift extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SwiftProps = typeof __propDef.props
export type SwiftEvents = typeof __propDef.events
export type SwiftSlots = typeof __propDef.slots
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
