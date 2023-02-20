/** @typedef {typeof __propDef.props}  XingSquareProps */
/** @typedef {typeof __propDef.events}  XingSquareEvents */
/** @typedef {typeof __propDef.slots}  XingSquareSlots */
export default class XingSquare extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type XingSquareProps = typeof __propDef.props
export type XingSquareEvents = typeof __propDef.events
export type XingSquareSlots = typeof __propDef.slots
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
