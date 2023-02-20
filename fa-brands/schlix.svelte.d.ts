/** @typedef {typeof __propDef.props}  SchlixProps */
/** @typedef {typeof __propDef.events}  SchlixEvents */
/** @typedef {typeof __propDef.slots}  SchlixSlots */
export default class Schlix extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SchlixProps = typeof __propDef.props
export type SchlixEvents = typeof __propDef.events
export type SchlixSlots = typeof __propDef.slots
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
