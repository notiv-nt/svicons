/** @typedef {typeof __propDef.props}  PrinterProps */
/** @typedef {typeof __propDef.events}  PrinterEvents */
/** @typedef {typeof __propDef.slots}  PrinterSlots */
export default class Printer extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type PrinterProps = typeof __propDef.props
export type PrinterEvents = typeof __propDef.events
export type PrinterSlots = typeof __propDef.slots
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
