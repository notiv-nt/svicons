/** @typedef {typeof __propDef.props}  FortAwesomeProps */
/** @typedef {typeof __propDef.events}  FortAwesomeEvents */
/** @typedef {typeof __propDef.slots}  FortAwesomeSlots */
export default class FortAwesome extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type FortAwesomeProps = typeof __propDef.props
export type FortAwesomeEvents = typeof __propDef.events
export type FortAwesomeSlots = typeof __propDef.slots
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
