/** @typedef {typeof __propDef.props}  AngellistProps */
/** @typedef {typeof __propDef.events}  AngellistEvents */
/** @typedef {typeof __propDef.slots}  AngellistSlots */
export default class Angellist extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type AngellistProps = typeof __propDef.props
export type AngellistEvents = typeof __propDef.events
export type AngellistSlots = typeof __propDef.slots
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
