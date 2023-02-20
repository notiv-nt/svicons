/** @typedef {typeof __propDef.props}  ThinkPeaksProps */
/** @typedef {typeof __propDef.events}  ThinkPeaksEvents */
/** @typedef {typeof __propDef.slots}  ThinkPeaksSlots */
export default class ThinkPeaks extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ThinkPeaksProps = typeof __propDef.props
export type ThinkPeaksEvents = typeof __propDef.events
export type ThinkPeaksSlots = typeof __propDef.slots
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
