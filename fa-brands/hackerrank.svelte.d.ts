/** @typedef {typeof __propDef.props}  HackerrankProps */
/** @typedef {typeof __propDef.events}  HackerrankEvents */
/** @typedef {typeof __propDef.slots}  HackerrankSlots */
export default class Hackerrank extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type HackerrankProps = typeof __propDef.props
export type HackerrankEvents = typeof __propDef.events
export type HackerrankSlots = typeof __propDef.slots
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
