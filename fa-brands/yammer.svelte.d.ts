/** @typedef {typeof __propDef.props}  YammerProps */
/** @typedef {typeof __propDef.events}  YammerEvents */
/** @typedef {typeof __propDef.slots}  YammerSlots */
export default class Yammer extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type YammerProps = typeof __propDef.props
export type YammerEvents = typeof __propDef.events
export type YammerSlots = typeof __propDef.slots
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
