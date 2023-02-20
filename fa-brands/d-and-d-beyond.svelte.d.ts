/** @typedef {typeof __propDef.props}  DAndDBeyondProps */
/** @typedef {typeof __propDef.events}  DAndDBeyondEvents */
/** @typedef {typeof __propDef.slots}  DAndDBeyondSlots */
export default class DAndDBeyond extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type DAndDBeyondProps = typeof __propDef.props
export type DAndDBeyondEvents = typeof __propDef.events
export type DAndDBeyondSlots = typeof __propDef.slots
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
