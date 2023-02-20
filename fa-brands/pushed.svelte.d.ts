/** @typedef {typeof __propDef.props}  PushedProps */
/** @typedef {typeof __propDef.events}  PushedEvents */
/** @typedef {typeof __propDef.slots}  PushedSlots */
export default class Pushed extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type PushedProps = typeof __propDef.props
export type PushedEvents = typeof __propDef.events
export type PushedSlots = typeof __propDef.slots
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
