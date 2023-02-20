/** @typedef {typeof __propDef.props}  TerminalProps */
/** @typedef {typeof __propDef.events}  TerminalEvents */
/** @typedef {typeof __propDef.slots}  TerminalSlots */
export default class Terminal extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type TerminalProps = typeof __propDef.props
export type TerminalEvents = typeof __propDef.events
export type TerminalSlots = typeof __propDef.slots
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
