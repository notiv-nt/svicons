/** @typedef {typeof __propDef.props}  JsProps */
/** @typedef {typeof __propDef.events}  JsEvents */
/** @typedef {typeof __propDef.slots}  JsSlots */
export default class Js extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type JsProps = typeof __propDef.props
export type JsEvents = typeof __propDef.events
export type JsSlots = typeof __propDef.slots
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
