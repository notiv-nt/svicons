/** @typedef {typeof __propDef.props}  PlaystationProps */
/** @typedef {typeof __propDef.events}  PlaystationEvents */
/** @typedef {typeof __propDef.slots}  PlaystationSlots */
export default class Playstation extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type PlaystationProps = typeof __propDef.props
export type PlaystationEvents = typeof __propDef.events
export type PlaystationSlots = typeof __propDef.slots
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
