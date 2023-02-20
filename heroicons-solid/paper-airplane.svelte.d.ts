/** @typedef {typeof __propDef.props}  PaperAirplaneProps */
/** @typedef {typeof __propDef.events}  PaperAirplaneEvents */
/** @typedef {typeof __propDef.slots}  PaperAirplaneSlots */
export default class PaperAirplane extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type PaperAirplaneProps = typeof __propDef.props
export type PaperAirplaneEvents = typeof __propDef.events
export type PaperAirplaneSlots = typeof __propDef.slots
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
