/** @typedef {typeof __propDef.props}  XCircleProps */
/** @typedef {typeof __propDef.events}  XCircleEvents */
/** @typedef {typeof __propDef.slots}  XCircleSlots */
export default class XCircle extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type XCircleProps = typeof __propDef.props
export type XCircleEvents = typeof __propDef.events
export type XCircleSlots = typeof __propDef.slots
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
