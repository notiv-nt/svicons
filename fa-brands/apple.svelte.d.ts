/** @typedef {typeof __propDef.props}  AppleProps */
/** @typedef {typeof __propDef.events}  AppleEvents */
/** @typedef {typeof __propDef.slots}  AppleSlots */
export default class Apple extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type AppleProps = typeof __propDef.props
export type AppleEvents = typeof __propDef.events
export type AppleSlots = typeof __propDef.slots
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
