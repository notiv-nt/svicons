/** @typedef {typeof __propDef.props}  YoastProps */
/** @typedef {typeof __propDef.events}  YoastEvents */
/** @typedef {typeof __propDef.slots}  YoastSlots */
export default class Yoast extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type YoastProps = typeof __propDef.props
export type YoastEvents = typeof __propDef.events
export type YoastSlots = typeof __propDef.slots
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
