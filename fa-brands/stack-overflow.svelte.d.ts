/** @typedef {typeof __propDef.props}  StackOverflowProps */
/** @typedef {typeof __propDef.events}  StackOverflowEvents */
/** @typedef {typeof __propDef.slots}  StackOverflowSlots */
export default class StackOverflow extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type StackOverflowProps = typeof __propDef.props
export type StackOverflowEvents = typeof __propDef.events
export type StackOverflowSlots = typeof __propDef.slots
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
