/** @typedef {typeof __propDef.props}  BlackberryProps */
/** @typedef {typeof __propDef.events}  BlackberryEvents */
/** @typedef {typeof __propDef.slots}  BlackberrySlots */
export default class Blackberry extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type BlackberryProps = typeof __propDef.props
export type BlackberryEvents = typeof __propDef.events
export type BlackberrySlots = typeof __propDef.slots
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
