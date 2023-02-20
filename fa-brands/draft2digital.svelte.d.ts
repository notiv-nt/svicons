/** @typedef {typeof __propDef.props}  Draft2digitalProps */
/** @typedef {typeof __propDef.events}  Draft2digitalEvents */
/** @typedef {typeof __propDef.slots}  Draft2digitalSlots */
export default class Draft2digital extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type Draft2digitalProps = typeof __propDef.props
export type Draft2digitalEvents = typeof __propDef.events
export type Draft2digitalSlots = typeof __propDef.slots
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
