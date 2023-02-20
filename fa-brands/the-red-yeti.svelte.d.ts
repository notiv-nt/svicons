/** @typedef {typeof __propDef.props}  TheRedYetiProps */
/** @typedef {typeof __propDef.events}  TheRedYetiEvents */
/** @typedef {typeof __propDef.slots}  TheRedYetiSlots */
export default class TheRedYeti extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type TheRedYetiProps = typeof __propDef.props
export type TheRedYetiEvents = typeof __propDef.events
export type TheRedYetiSlots = typeof __propDef.slots
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
