/** @typedef {typeof __propDef.props}  JsSquareProps */
/** @typedef {typeof __propDef.events}  JsSquareEvents */
/** @typedef {typeof __propDef.slots}  JsSquareSlots */
export default class JsSquare extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type JsSquareProps = typeof __propDef.props
export type JsSquareEvents = typeof __propDef.events
export type JsSquareSlots = typeof __propDef.slots
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
