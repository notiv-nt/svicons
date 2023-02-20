/** @typedef {typeof __propDef.props}  FingerPrintProps */
/** @typedef {typeof __propDef.events}  FingerPrintEvents */
/** @typedef {typeof __propDef.slots}  FingerPrintSlots */
export default class FingerPrint extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type FingerPrintProps = typeof __propDef.props
export type FingerPrintEvents = typeof __propDef.events
export type FingerPrintSlots = typeof __propDef.slots
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
