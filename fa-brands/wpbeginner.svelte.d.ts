/** @typedef {typeof __propDef.props}  WpbeginnerProps */
/** @typedef {typeof __propDef.events}  WpbeginnerEvents */
/** @typedef {typeof __propDef.slots}  WpbeginnerSlots */
export default class Wpbeginner extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type WpbeginnerProps = typeof __propDef.props
export type WpbeginnerEvents = typeof __propDef.events
export type WpbeginnerSlots = typeof __propDef.slots
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
